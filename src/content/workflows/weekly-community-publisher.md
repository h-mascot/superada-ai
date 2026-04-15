---
title: Weekly Community Publisher
summary: A prompt-driven editorial workflow for collecting weekly community signal, drafting the roundup, and shipping it with human review, without pretending there is a packaged bundle behind it yet.
tagline: From scattered posts and notes to a shippable weekly dispatch.
status: Draft
difficulty: Medium
category: Publishing
sourceLabel: SuperAda publishing workflow
sourceUrl: /blog/why-blog-pipelines-need-a-registry-not-just-crons
installCommand: openclaw agent run --prompt "Draft and stage the weekly community roundup using the publishing workflow"
estimatedSetup: Manual review required
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
notes:
  - This is currently a prompt-driven workflow pattern, not a packaged local or external bundle.
bundle:
  id: superada.workflow.weekly-community-publisher
  version: 1.0.0
  classification: conceptual
  installMode: prompt-only
  reviewStatus: concept-review
  entrypoint: editorial prompt
  bundleRoot: prompt-driven workflow, not yet packaged
  artifactCount: 4
  summary: A lightweight editorial workflow pattern that packages the recurring roundup process conceptually, while keeping installation and artifacts honest.
  availabilityNote: This listing does not point to a real bundle directory or installable external package yet. It describes a supervised workflow that currently starts from a prompt plus operator-managed notes.
  installSource:
    type: prompt
    label: Manual prompt run
    script: openclaw agent run --prompt "Draft and stage the weekly community roundup using the publishing workflow"
artifacts:
  - name: Editorial run prompt
    type: prompt
    path: prompt:Draft and stage the weekly community roundup using the publishing workflow
    description: Operator-launched prompt that frames the roundup draft and staging work.
  - name: Source collection notes
    type: concept
    path: operator-managed weekly links and notes
    description: Human-curated sources that seed the publishing run before the draft is generated.
  - name: Draft article output
    type: doc
    path: src/content/blog/<weekly-roundup>.mdx
    description: The intended draft output staged for editorial review and later publication.
  - name: Publish checklist concept
    type: concept
    path: editorial review checklist
    description: Manual approval layer that confirms tone, links, and formatting before publish.
installSteps:
  - title: Gather weekly source material
    detail: Assemble the links, notes, and candidate items that should feed the weekly roundup.
  - title: Run the drafting prompt
    detail: Launch the workflow manually to create or update the roundup draft.
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
  mode: conceptual
  reviewNotes:
    - Review links, names, and claims before shipping.
    - Confirm the final article matches the week's actual themes instead of generic filler.
    - Treat generation as draft acceleration, not autonomous publishing.
  checks:
    - label: Prompt run produces a draft
      detail: Confirm the workflow produced a concrete article draft or staged content update.
      expected: A publishable draft file or working draft is ready for human review.
    - label: Editorial review complete
      detail: Read the article end to end and fix voice, accuracy, and formatting before publish.
      expected: A reviewed draft that can be committed without obvious factual or stylistic issues.
structure:
  - prompt-driven workflow
  - operator-managed weekly source notes
  - src/content/blog/<weekly-roundup>.mdx
  - editorial review checklist
---

A lean first-pass publishing workflow. It is useful today, but it is now labeled honestly as prompt-driven rather than as a shipped bundle.
