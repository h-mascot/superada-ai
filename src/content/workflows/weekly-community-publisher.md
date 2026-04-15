---
title: Weekly Community Publisher
summary: A publishing workflow for collecting weekly community signal, drafting the roundup, and shipping it to the site on a regular cadence.
tagline: From scattered posts and notes to a shippable weekly dispatch.
status: Draft
difficulty: Medium
category: Publishing
sourceLabel: SuperAda publishing workflow
sourceUrl: /blog/why-blog-pipelines-need-a-registry-not-just-crons
installCommand: openclaw agent run --prompt "Draft and stage the weekly community roundup using the publishing workflow"
estimatedSetup: 10 min
operators:
  - Ada
  - Zora
stack:
  - OpenClaw
  - site content
  - editorial review
  - scheduled publish
outcomes:
  - Structured weekly roundup draft
  - Repeatable publishing cadence
  - Less manual editorial coordination
includes:
  - Signal collection
  - Draft generation
  - Publish-ready structure
useCases:
  - Weekly ecosystem updates
  - Community report generation
  - Editorial ops that should not start from zero each Monday
bundle:
  id: superada.workflow.weekly-community-publisher
  version: 1.0.0
  installMode: manual
  reviewStatus: manual-review
  entrypoint: editorial prompt
  bundleRoot: content workflow
  artifactCount: 4
  summary: A lightweight editorial bundle that packages the recurring roundup workflow as a supervised, repeatable publishing process.
artifacts:
  - name: Editorial run prompt
    type: template
    path: manual prompt run
    description: Operator-launched prompt that frames the roundup draft and staging work.
  - name: Source collection notes
    type: doc
    path: weekly links, notes, and community references
    description: Human-curated sources that seed the publishing run before the draft is generated.
  - name: Draft article
    type: doc
    path: src/content/blog/<weekly-roundup>.mdx
    description: Draft output staged for editorial review and later publication.
  - name: Publish checklist
    type: config
    path: editorial review checklist
    description: Manual approval layer that confirms tone, links, and formatting before publish.
installSteps:
  - title: Gather weekly source material
    detail: Assemble the links, notes, and candidate items that should feed the weekly roundup.
  - title: Run the drafting prompt
    detail: Launch the publishing workflow manually to create or update the roundup draft.
    command: openclaw agent run --prompt "Draft and stage the weekly community roundup using the publishing workflow"
  - title: Review and publish by hand
    detail: Edit the draft, confirm links and tone, then commit or publish only after human review.
requirements:
  - label: Editorial source material
    detail: The workflow needs a real pool of links, notes, and community signal to summarize.
    type: review
  - label: Site content access
    detail: The operator needs permission to stage or edit blog content in the site repo.
    type: access
  - label: Human editorial approval
    detail: Publishing stays supervised in v1, especially for tone, accuracy, and headline quality.
    type: review
verification:
  mode: manual
  reviewNotes:
    - Review links, names, and claims before shipping.
    - Confirm the final article matches the week's actual themes instead of generic filler.
    - Treat generation as draft acceleration, not autonomous publishing.
  checks:
    - label: Draft exists
      detail: Confirm the workflow produced a concrete article draft or staged content update.
      expected: A publishable draft file or working draft is ready for human review.
    - label: Editorial review complete
      detail: Read the article end to end and fix voice, accuracy, and formatting before publish.
      expected: A reviewed draft that can be committed without obvious factual or stylistic issues.
structure:
  - content workflow
  - weekly source notes
  - src/content/blog/<weekly-roundup>.mdx
  - editorial review checklist
---

A lean first-pass publishing bundle. Manual approval stays in the loop, but the repetitive structure is handled for you.
