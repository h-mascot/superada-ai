# SuperAda Timeline Operations

The public Timeline lives at `/journey` and is backed by:

- `src/data/milestones.ts` - canonical milestone list
- `src/pages/journey.astro` - rendering only

## Inclusion rule

The Timeline is not a blog archive. Add an entry when SuperAda materially changes.

Good sources:

- shipped internal tools
- launch moments
- incidents / lessons
- new agent or infrastructure milestones
- public theses that became core to the brand
- blog posts as evidence or links, not as the primary filter

## When publishing new work

After publishing a SuperAda blog post or shipping a meaningful internal tool, ask:

1. Did the crew/system materially level up?
2. Did a durable thesis crystallize?
3. Is there proof - shipped feature, workflow, incident, benchmark, tool, automation, or operating scar?
4. Would someone new understand SuperAda better from this entry?
5. Is this part of the public arc: solo agent → crew → infrastructure → operating system → proof/security/control-plane worldview?

If yes, add a milestone to `src/data/milestones.ts` in reverse chronological order.

## Entry shape

```ts
{
  date: 'YYYY-MM-DD',
  title: 'Short story-level title',
  emoji: '🧭',
  source: 'tool', // post | tool | launch | incident | agent | infra | thesis
  slug: 'blog-slug-if-there-is-one',
  description: 'One punchy paragraph about what changed and why it matters.',
}
```

`slug` is optional. Use it when there is a blog post or story page that proves the milestone.

## Quality bar

Prefer fewer, stronger, story-level milestones over many article-level updates. The entry should read like “this is the moment the system learned X,” not “we published X.”
