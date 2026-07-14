# Linear Workspace Active-Issue Pre-flight

## Why this exists

A grill-to-linear run hit the free-tier Linear `activeIssueCount` cap mid-flight on
2026-06-21 (Mycelium V1 run, Theherald workspace):

```
USAGE_LIMIT_EXCEEDED
usageMetric: "activeIssueCount"
message: "You've exceeded the free issue limit for this workspace."
```

13 parent epics had already been created (`THE-194` … `THE-206`) before the cap fired on
the first child. The session ended with no load receipt, no parent→child relations, no
sibling `blocks` edges, and no way to resume cleanly without either upgrading the
workspace or deleting existing issues.

## The fix: probe before Phase 3

Run this snippet **before** the loader runs. It is a single GraphQL round trip and
prints the team-level issue count plus the per-project breakdown so you can decide
whether to proceed.

```python
import os, json, urllib.request
KEY = os.environ['LINEAR_API_KEY']
URL = 'https://api.linear.app/graphql'

def gql(q, v=None):
    body = json.dumps({'query': q, 'variables': v or {}}).encode()
    req = urllib.request.Request(URL, data=body, headers={
        'Authorization': KEY, 'Content-Type': 'application/json',
    })
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

# 1) Discover teams
teams = gql('{ teams(first: 10) { nodes { id name key } } }')['data']['teams']['nodes']
for t in teams:
    print(f"TEAM {t['name']} ({t['key']}) -> {t['id']}")

# 2) Count active issues per team (note: Linear's `first` is capped at 250)
total = 0
for t in teams:
    cnt = 0
    cursor = None
    while True:
        q = '''
        query($t:ID!,$a:String) {
          issues(filter:{team:{id:{eq:$t}}}, first: 250, after: $a) {
            pageInfo { hasNextPage endCursor }
            nodes { id }
          }
        }
        '''
        r = gql(q, {'t': t['id'], 'a': cursor})
        nodes = r['data']['issues']['nodes']
        cnt += len(nodes)
        if not r['data']['issues']['pageInfo']['hasNextPage']:
            break
        cursor = r['data']['issues']['pageInfo']['endCursor']
    print(f"  {t['name']}: {cnt} issues")
    total += cnt
print(f"WORKSPACE TOTAL: {total}")

# 3) Per-project breakdown (for the project you intend to write into)
projs = gql('{ projects(first: 50) { nodes { id name url } } }')['data']['projects']['nodes']
for p in projs:
    q = '''
    query($p:ID!,$a:String) {
      issues(filter:{project:{id:{eq:$p}}}, first: 250, after: $a) {
        pageInfo { hasNextPage endCursor }
        nodes { id }
      }
    }
    '''
    cnt = 0
    cursor = None
    while True:
        r = gql(q, {'p': p['id'], 'a': cursor})
        cnt += len(r['data']['issues']['nodes'])
        if not r['data']['issues']['pageInfo']['hasNextPage']:
            break
        cursor = r['data']['issues']['pageInfo']['endCursor']
    print(f"  {cnt:4d}  {p['name']}  {p['url']}")
```

## Decision rule

Compute `current + planned_children + safety_margin (default 5)`. The free-tier cap is
**250 issues per workspace**; paid Standard/Pro plans raise it. If you cannot enumerate
the plan from `teams(first: 1)` (free plan blocks the `workspace { plan }` query), use
250 as the conservative cap and confirm via the empirical `issueCreate` failure
message.

```
need = current + planned_children + 5
if need > cap:
    STOP and surface the pick-one menu (do not start the loader)
else:
    proceed with Phase 3/4
```

## Pick-one menu to surface when blocked

```
1. Upgrade Linear workspace (Standard/Pro raises the active-issue cap). I resume child
   creation immediately after.
2. Cancel or archive existing issues in the workspace to free N slots. I resume after
   the count drops below cap.
3. Cancel the parents I just created, deliver the full graph as a local artifact
   (docs/specs/issue-map.md + per-child body files), and resume Linear when capacity
   allows.
4. Keep the parents, deliver the children as local files only (option 3 minus the
   cancel). N slots back, 74 (or N) issues still pending in repo.
```

## What counts as "active" on free plan

Empirically (Theherald, 2026-06-21): Backlog + Todo + In Review all count toward the
250 cap. Cancelled may or may not (it depended on whether the cancel was a soft archive
or a hard delete). If you need certainty, prefer **option 1 (upgrade)** before
launching the loader; the upgrade is the cheapest path on multi-project workspaces
because you will hit the cap again on the next grill.

## Idempotency note

The loader script in this skill (`scripts/helm-parent-merge.py` is one example;
`scripts/load_linear_mycelium.py` in the Mycelium run is another) is title-keyed
create-or-update. Rerunning after a workspace upgrade will not duplicate; it will
update. Always end a loader run with a load receipt under
`output/phase3-linear/phase3-4-load-receipt.json` (or the equivalent per-run path) so
resume decisions have evidence.

## Failure mode to NOT fall into

Do not respond to a mid-flight `USAGE_LIMIT_EXCEEDED` by trying to delete the
half-created parents to "free slots and retry." The parents were already counted
against the cap; deleting them mid-run rarely frees the slot the same minute, and you
will lose the parent spine. The correct response is to **stop the loader, save the
script + receipt of what landed, and ask Henry**.