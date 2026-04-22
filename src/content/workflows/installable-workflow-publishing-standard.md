---
title: Installable Workflow Publishing Standard
summary: A publishing standard for SuperAda workflow and skill pages so anything marked as published can also be installed from a stable link, with a real installer, artifact manifest, verification path, and honest safety boundaries.
tagline: If it ships, it installs.
status: Live
isTemplate: false
difficulty: Medium
category: Operations
sourceLabel: SuperAda publishing standard
sourceUrl: https://github.com/henrino3/superada-ai
installCommand: Use this standard before publishing any new workflow or skill page on SuperAda
repoPath: src/content/workflows/installable-workflow-publishing-standard.md
estimatedSetup: Process standard
operators:
  - Ada
stack:
  - SuperAda site
  - OpenClaw
  - install bundle
  - verification
outcomes:
  - Every published workflow has a stable install URL
  - Every published skill/workflow has a real installer or honest conceptual label
  - Operators stop shipping pages that cannot be installed
includes:
  - Install URL standard
  - Manifest requirement
  - Installer requirement
  - Verification requirement
  - Safety review requirement
useCases:
  - Publishing new SuperAda workflows
  - Publishing installable skill pages
  - Preventing "documented but not installable" workflow pages
notes:
  - Henry rule: if it is published as a workflow or skill on SuperAda, it should be installable unless it is explicitly labeled conceptual.
bundle:
  id: superada.workflow.installable-publishing-standard
  version: 1.0.0
  classification: local
  installMode: manual
  reviewStatus: manual-review
  entrypoint: install standard
  bundleRoot: src/content/workflows/installable-workflow-publishing-standard.md
  artifactCount: 5
  summary: A repeatable publishing contract that forces installers, manifests, and verification to exist before SuperAda pages claim a workflow or skill is published.
  availabilityNote: This is a publishing standard, not an installable runtime bundle.
  installSource:
    type: local-path
    label: Publishing standard
    script: Follow this standard before merging any new workflow or skill page.
  installable:
    supported: false
    method: manual
    instructions:
      - Treat this as a publication rule set.
      - Use it before publishing any workflow or skill on SuperAda.
    limitations:
      - This page defines the rule. It is not itself a runtime install bundle.
artifacts:
  - name: Stable install URL
    type: requirement
    path: /install/<slug>/
    description: Every published workflow or skill must have a stable public install root.
  - name: Installer script
    type: requirement
    path: /install/<slug>/install.sh
    description: Real installer that copies or installs the assets into the target environment.
  - name: Bundle manifest
    type: requirement
    path: /install/<slug>/BUNDLE_FILES.txt
    description: Machine-readable artifact list so the installer is reproducible.
  - name: Bundle README
    type: requirement
    path: /install/<slug>/README.md
    description: Human-readable install instructions, warnings, and verification steps.
  - name: Verification commands
    type: requirement
    path: workflow page frontmatter + README
    description: Manual or automated checks that prove the install actually worked.
installSteps:
  - title: Build the install bundle first
    detail: Before publishing the page, create the install directory, installer, README, and manifest.
  - title: Verify the installer in a clean target workspace
    detail: Run the installer against a clean workspace and confirm the expected files land correctly.
  - title: Publish the workflow page with the real install command
    detail: The page should point at the stable install URL, not at a vague copy-paste description.
requirements:
  - label: Stable public path
    detail: The install artifacts must live at a public stable path under `/install/<slug>/`.
    type: dependency
  - label: Honest safety boundaries
    detail: If the installer does not create crons or mutates memory, say so explicitly and gate it appropriately.
    type: review
  - label: Real verification
    detail: Published pages need runnable verification commands, not vibes.
    type: review
verification:
  mode: manual
  reviewNotes:
    - If the page says installable, the installer must exist and work.
    - If the bundle is not installable, label it conceptual or internal instead of bluffing.
  checks:
    - label: Install URL exists
      detail: Visit the published install URL and confirm installer, README, and manifest are reachable.
      expected: `/install/<slug>/` serves the expected files.
    - label: Installer works in a clean workspace
      detail: Run the installer against a test workspace.
      expected: The expected artifacts land in the right paths and verification commands run.
structure:
  - /install/<slug>/
  - /install/<slug>/install.sh
  - /install/<slug>/README.md
  - /install/<slug>/BUNDLE_FILES.txt
  - workflow page with real install command
---

## Publishing rule

From now on, if a workflow or skill is published on SuperAda as something people should use, it must satisfy one of these states:

- **Installable**: has a real install bundle and verification path
- **Conceptual**: explicitly labeled conceptual and not presented as installable
- **Internal**: explicitly labeled internal and not presented as public installable infrastructure

Anything else is muddy and should not ship.

## Minimum installable standard

To count as installable on SuperAda, a workflow or skill page must have:

1. A stable public install root at `/install/<slug>/`
2. A real installer script at `/install/<slug>/install.sh`
3. A bundle manifest listing all copied artifacts
4. A README with warnings, setup notes, and verification commands
5. A page install command that points at the real installer
6. Honest safety notes about what is and is not automated
7. A verification step that proves the install worked

## Default posture

Default posture should be:

- install the files
- do not silently create risky automation without review
- require manual verification before activation for anything that mutates memory, adds crons, or touches production behavior

That keeps the pages truthful without making them useless.
