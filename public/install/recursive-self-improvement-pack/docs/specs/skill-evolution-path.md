# Skill Evolution Path (Hermes Phase 3)

**Purpose:** Bridge the gap between recognized agent failures (Soul Reviews) and structural skill improvements (`SKILL.md` patches, new helper scripts). This establishes a formal path where repeated corrections evolve into durable capabilities.

## The Skill Evolution Flow

This flow acts as the `[SKILL]` branch of the Recursive Improvement Pipeline.

### 1. Trigger
- The `recursive-improvement.sh` script detects a `HIGH` or `CRITICAL` reflection related to a skill or procedural failure.
- A candidate is generated in `memory/improvement-candidates/` with `Classification: SKILL`.

### 2. Proposal Generation (`skill-evolution-review.sh`)
An automated run scans for unapplied `[PROPOSED]` SKILL candidates. For each:
- It synthesizes the failure context.
- It drafts a concrete patch (e.g., diffs for `SKILL.md` or a new `scripts/helper.sh`).
- It attaches the drafted patch to the candidate file as an `[EVALUATION]` block.

### 3. Review Boundaries (Auto-Apply vs. Human Review)

**Safe Auto-Apply:**
- Adding pure reference files (`references/*.md`) that just hold docs.
- Expanding "When to Use" descriptions in `SKILL.md` frontmatter.
- Adding non-destructive regex or string-manipulation helper scripts in python/bash (no external networking).
- Adding clarification notes or guardrail text into `SKILL.md` bodies.

**Requires Human Review (Gated):**
- Modifying or adding scripts that use external APIs (curl, requests, API keys).
- Modifying or adding scripts with destructive commands (`rm`, `mv`, database drops).
- Adding completely new agent workflows that spawn subagents.
- Changing `exec` approval bypass rules.

### 4. Application
- If categorized as Safe Auto-Apply, the system applies the diff, commits the change, and marks the candidate `[APPLIED]`.
- If Human Review is required, the system halts execution for that candidate, pings the operator (via Discord or MC), and waits for approval.

### 5. Verification
- 7 days after application, the system checks `memory/reflections.md` to see if the same failure type has resurfaced.

## Integration
- Runs daily or weekly via `scripts/crons/skill-evolution-review.sh` (or triggered by the overarching recursive-improvement pipeline).
- Integrates with `skill-creator` for standardizing new skill directory layouts.
