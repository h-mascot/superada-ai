# Linear API quirks for execution-pack runs (2026-06-22)

## Trigger

While posting a proof comment and moving THE-176 to "In Review" during the Hoshi driver supervisor recovery, the Linear GraphQL mutations rejected the obvious shapes. The errors were ambiguous and the documentation does not make the right shape obvious. Capturing the working patterns here so future Book driver runs do not waste time.

## Lesson

Linear's GraphQL `IssueUpdate` mutation has a non-obvious shape:

- The `IssueUpdateInput` **does not accept** `id` or `state`.
- Use `stateId` (the workflow state UUID), not the human-readable state name.
- Pass `id` as a **top-level mutation argument**, not inside `input`.

## Working shapes

### Comment

```graphql
mutation($id:String!,$body:String!) {
  commentCreate(input:{issueId:$id, body:$body}) {
    success
    comment { id url }
  }
}
```

- `issueId` accepts the issue identifier (`THE-176`) **or** the UUID.
- Body is markdown; no length cap relevant for our proof-summary sizes.

### Move state

```graphql
mutation($id:String!,$input:IssueUpdateInput!) {
  issueUpdate(id:$id, input:$input) {
    success
    issue { id identifier state { name } }
  }
}
```

- Top-level `id` arg = issue UUID. Use the UUID, not the identifier (`THE-176`); the identifier shape also works here but UUID is safer.
- `input` carries the actual fields. For state changes, set `stateId` to the workflow-state UUID, never `state`.
- Issue identifiers like `THE-176` **do not** work in `IssueUpdateInput` at all — that input does not have an `id` field.

### Resolving workflow-state UUID

```graphql
query {
  workflowStates(filter:{name:{eq:"In Review"}}) {
    nodes { id name team { key } }
  }
}
```

This returns every team's `In Review` state. Filter by `team.key` when there is more than one team, or call with `first:1` if you only care about one.

## Failure shapes observed in practice

| Mutation | Wrong shape | Error |
|---|---|---|
| `issueUpdate(input:{id, state})` | id inside input, state name | `Field "id" is not defined by type "IssueUpdateInput"` and `Field "state" is not defined ... Did you mean "stateId", "estimate", "slaType", "title"?` |
| `issueUpdate(id, input:{state})` with `state` instead of `stateId` | wrong input field | `Field "state" is not defined ... Did you mean "stateId"?` |
| `issueUpdate(input:{stateId: <name>})` | workflow name instead of UUID | `Entity "WorkflowState" not found` or `Invalid value for stateId` |

## Pitfalls

- Do not assume `IssueUpdateInput` mirrors the fields you can read off an issue. `id` and `state` are top-level / different-type only.
- Do not put the issue identifier (`THE-176`) inside `input.id` — it is not accepted.
- Do not pass `state: "In Review"` — that field does not exist; pass `stateId: "<uuid>"`.
- Do not skip the workflow-state lookup. Caching the UUID per workspace saves a round trip but is not necessary at the volume a supervisor cron hits.

## Authentication

Use the global `LINEAR_API_KEY` from `~/.hermes/.env`. Read it non-verbosely (no echo) and never log or commit it. The hermes sandbox redacts the literal token value in tool output, so do not try to print it as part of a script — load it into `os.environ` and reference it via `os.environ['LINEAR_API_KEY']` after a single read into a temp file (`/tmp/.lkey`, chmod 600).

## Rate limits and timeouts

- The endpoint is `https://api.linear.app/graphql`, POST only.
- Default urllib timeout: 20 seconds is plenty for read and write paths.
- 5xx errors are rare; if you hit one, retry once before treating it as a real failure.
- 401 = wrong/missing key. 400 = GraphQL validation failed; read the error message carefully — they are usually specific.

## Helper already shipped

`scripts/linear/get_issue.py` exists in Hoshi. Add an analogous `scripts/linear/post_proof_comment.py` and `scripts/linear/set_issue_state.py` so the next autonomous run can post comments and state changes without re-deriving the mutation shape. Keep them read-and-write aware; the cron can then call them instead of inlining GraphQL.

## Pattern to embed in execution packs

When the goal-mode prompt tells Cursor to post a proof comment or change state, the helper should be the only mechanism. Do not let Cursor call the Linear API directly; it does not have the key reliably and it does not know the mutation shape. The runner pattern is:

1. Cursor stages comment body and state change in `.cursor/<project>-autonomous-run-state.json` under `proofCommentQueue` and `stateChangeQueue`.
2. Driver cron drains the queue via the helper scripts (which read the key from `~/.hermes/.env`).
3. Driver updates the queue entry to `POSTED` or `APPLIED` with a timestamp.

This is the same pattern that already exists for the proof-comment path; extend it for state changes too.