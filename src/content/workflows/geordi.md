---
title: Geordi
summary: An installable Geordi builder workflow that turns a broad goal or PRD into bounded missions, runs them through Codex or Droid, verifies acceptance commands outside the agent loop, and leaves auditable receipts.
tagline: Goals, missions, Codex, Droid, verification, receipts. Less agent jazz hands.
status: Live
difficulty: Medium
category: Operations
sourceLabel: Enterprise-Crew-skills/geordi
sourceUrl: https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/geordi
installCommand: bash <(curl -fsSL https://raw.githubusercontent.com/h-mascot/Enterprise-Crew-skills/v1.1.0/geordi/install.sh)
repoPath: geordi
estimatedSetup: 2 minutes after Codex or Droid is already installed
operators:
  - Any coding agent operator
  - Codex
  - Droid
stack:
  - Bash
  - Git
  - Codex CLI
  - Factory Droid CLI
outcomes:
  - Goal files that make the intended outcome explicit
  - Mission records with acceptance commands and optional scope limits
  - Codex and Droid execution paths from one wrapper
  - Verification logs saved separately from agent logs
  - "Run receipts under `.geordi/state/`"
includes:
  - One-script installer
  - "`geordi` CLI wrapper"
  - Codex mode
  - Droid mode
  - Mission JSONL state
  - Acceptance-command verification
  - Public examples for Codex and Droid goals
useCases:
  - Convert a feature request into small agent missions
  - Run the same mission with Codex or Droid without rewriting the workflow
  - Keep proof around agent work before committing or opening a PR
  - Give another operator a reusable goal/mission runner without private crew context
notes:
  - This is the public reusable version. Private hostnames, account-specific model IDs, operator names, Tailnet addresses, and secrets were removed.
  - It does not install Codex or Droid for you; it detects and uses whichever runtime you choose.
  - The former build-pipeline listing has been merged into Geordi.
bundle:
  id: superada.workflow.geordi
  version: 1.1.0
  classification: external
  installMode: agent-installable
  reviewStatus: source-review
  entrypoint: SKILL.md
  bundleRoot: github:h-mascot/Enterprise-Crew-skills/geordi
  artifactCount: 9
  summary: "Geordi packages an agent-friendly builder loop: load context, store the goal, add bounded missions, run Codex or Droid, execute the acceptance command separately, and save the receipts. The install script places the bundle in `~/.geordi` and creates a `geordi` command in `~/.local/bin`."
  availabilityNote: The bundle is hosted in the public Enterprise Crew skills repository and installs with one shell script. Operators should still review the source before running it, because it can launch local coding agents and execute acceptance commands inside a git repo.
  installSource:
    type: github
    label: GitHub skill bundle and installer
    url: https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/geordi
    script: bash <(curl -fsSL https://raw.githubusercontent.com/h-mascot/Enterprise-Crew-skills/v1.1.0/geordi/install.sh)
  installable:
    supported: true
    method: script
    sourceUrl: https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/geordi
    sourceSpec: github:h-mascot/Enterprise-Crew-skills/geordi
    instructions:
      - "Review the public GitHub bundle before install. The important files are `SKILL.md`, `install.sh`, and `scripts/geordi`."
      - "Run the one-line installer. It copies the bundle to `~/.geordi` and creates `~/.local/bin/geordi`."
      - "Enter a git repository and initialize a goal with `geordi init --goal \"<outcome>\" --mode codex` or `--mode droid`."
      - Add one or more missions with an acceptance command. Keep missions small enough that a failed verification points to a clear fix.
      - "Run with `geordi run --mode codex` or `geordi run --mode droid --model \"custom:Your-Model-0\"`, then inspect `.geordi/state/` before committing."
    postInstallVerification: geordi --version && geordi doctor
    limitations:
      - "Requires an existing `codex` or `droid` installation for execution modes."
      - Requires a git repository; the tool refuses to run implementation missions outside one.
      - Acceptance commands are operator-provided and run locally, so review them before handing the workflow to an autonomous agent.
artifacts:
  - name: Skill contract
    type: skill
    path: github:h-mascot/Enterprise-Crew-skills/geordi/SKILL.md
    description: Public operating instructions explaining goals, missions, modes, state, verification, and safety boundaries.
  - name: Installer
    type: script
    path: github:h-mascot/Enterprise-Crew-skills/geordi/install.sh
    description: "One-script installer that copies the bundle to `~/.geordi` and creates `~/.local/bin/geordi`."
  - name: CLI runner
    type: script
    path: github:h-mascot/Enterprise-Crew-skills/geordi/scripts/geordi
    description: Bash CLI implementing init, mission add, run, status, and doctor commands.
  - name: Default manifest
    type: config
    path: github:h-mascot/Enterprise-Crew-skills/geordi/manifests/default.env
    description: Optional environment defaults for Codex and Droid run settings.
  - name: Codex example
    type: doc
    path: github:h-mascot/Enterprise-Crew-skills/geordi/examples/codex-goal.md
    description: Minimal goal and mission example using Codex mode.
  - name: Droid example
    type: doc
    path: github:h-mascot/Enterprise-Crew-skills/geordi/examples/droid-goal.md
    description: Minimal goal and mission example using Droid mode and a placeholder custom model ID.
  - name: Mission template
    type: template
    path: github:h-mascot/Enterprise-Crew-skills/geordi/examples/mission-template.md
    description: Reusable mission shape with title, acceptance command, scope, and notes.
  - name: README
    type: doc
    path: github:h-mascot/Enterprise-Crew-skills/geordi/README.md
    description: Public quickstart, install notes, runtime options, and design overview.
  - name: Changelog
    type: doc
    path: github:h-mascot/Enterprise-Crew-skills/geordi/CHANGELOG.md
    description: Version notes and public sanitization statement.
installSteps:
  - title: Review the public bundle
    detail: "Inspect `SKILL.md`, `install.sh`, and `scripts/geordi` before execution so the local effects are understood."
    command: git clone https://github.com/h-mascot/Enterprise-Crew-skills.git /tmp/enterprise-crew-skills && sed -n '1,180p' /tmp/enterprise-crew-skills/geordi/SKILL.md
  - title: Install Geordi
    detail: "Copy the bundle into the user home and create the `geordi` command."
    command: bash <(curl -fsSL https://raw.githubusercontent.com/h-mascot/Enterprise-Crew-skills/v1.1.0/geordi/install.sh)
  - title: Verify installation
    detail: Confirm the wrapper exists and the current repository passes basic preflight checks.
    command: geordi --version && geordi doctor
  - title: Initialize a goal
    detail: "Create `.geordi/goal.md` and the mission state file inside the target git repository."
    command: geordi init --goal "Ship the smallest useful version of <feature>" --mode codex
  - title: Add a bounded mission
    detail: Create a mission with an acceptance command that proves success outside the agent loop.
    command: geordi mission add "Implement the core path" --accept "npm test" --scope "Only touch the relevant feature files."
  - title: Run with Codex or Droid
    detail: "Execute pending missions through the chosen runtime and write logs plus verification receipts under `.geordi/state/`."
    command: geordi run --mode codex
requirements:
  - label: Git repository
    detail: Geordi intentionally requires a git repo so before/after state can be captured and accidental broad edits are visible.
    type: runtime
  - label: Bash and Python 3
    detail: The installer and CLI use portable shell plus Python for JSONL parsing and safe escaping.
    type: dependency
  - label: Codex CLI or Droid CLI
    detail: "Execution requires whichever runtime is selected with `--mode`; install and authenticate those tools separately."
    type: dependency
  - label: Operator-reviewed acceptance commands
    detail: Acceptance commands run in the local repo. Treat them as executable instructions, not decorative metadata.
    type: review
verification:
  mode: source-review
  reviewNotes:
    - The published bundle is public and sanitized, but operators should still review source before running a workflow that launches coding agents.
    - Agent completion is not success. The acceptance command and saved verification log are the success boundary.
    - Failed verification should produce a smaller follow-up mission, not a larger prompt.
  checks:
    - label: Installer syntax
      detail: Validate the installer before publishing or modifying it.
      command: bash -n geordi/install.sh
      expected: Command exits cleanly.
    - label: CLI syntax
      detail: Validate the command wrapper before publishing or modifying it.
      command: bash -n geordi/scripts/geordi
      expected: Command exits cleanly.
    - label: Install smoke test
      detail: Install into a temporary home and confirm the wrapper reports a version.
      command: HOME=$(mktemp -d) bash geordi/install.sh && HOME=$HOME ~/.local/bin/geordi --version
      expected: "Prints `geordi 1.1.0`."
    - label: Public sanitization scan
      detail: Search the bundle for private hosts, private IPs, raw keys, and operator-specific account strings before release.
      command: grep -RInE '100\.|192\.168\.|10\.|sk-[A-Za-z0-9]|Bearer [A-Za-z0-9]|/Users/|henry|MascotM3|Enterprise' geordi || true
      expected: No private environment matches in the public bundle.
structure:
  - github:h-mascot/Enterprise-Crew-skills/geordi/
  - github:h-mascot/Enterprise-Crew-skills/geordi/SKILL.md
  - github:h-mascot/Enterprise-Crew-skills/geordi/README.md
  - github:h-mascot/Enterprise-Crew-skills/geordi/install.sh
  - github:h-mascot/Enterprise-Crew-skills/geordi/scripts/geordi
  - github:h-mascot/Enterprise-Crew-skills/geordi/manifests/default.env
  - github:h-mascot/Enterprise-Crew-skills/geordi/examples/codex-goal.md
  - github:h-mascot/Enterprise-Crew-skills/geordi/examples/droid-goal.md
  - github:h-mascot/Enterprise-Crew-skills/geordi/examples/mission-template.md
---

Geordi is the public, reusable version of the goal/mission workflow pattern: small missions, real acceptance checks, and receipts before anyone says “done.”
