# Recursive Improvement Pipeline Spec

**Purpose:** Formalize the end-to-end pipeline for AI agent self-improvement inside Clawd. This moves learning from passive journal entries into explicit, trackable artifacts that mutate the agent's behavior.

## The 5-Phase Pipeline

### 1. Capture (Daily)
- **What:** Immediate logging of failure patterns, inefficiencies, or success signals after tasks.
- **Where:** `memory/reflections.md`
- **Trigger:** `daily-soul-review.sh` (prompts daily introspection) or ad-hoc after an MC task.
- **Format:** Structured markdown block including `Signal strength` and `Affected section`.

### 2. Classify (Weekly/Ad-hoc)
- **What:** Triaging raw reflections into concrete improvement types. Is this a system rule, a skill modification, a cron adjustment, or a workflow guardrail?
- **Types:**
  - `RULE`: Needs an update to `SOUL.md` or core system prompts.
  - `SKILL`: Needs a patch to a specific `SKILL.md` or related script.
  - `CRON`: Needs scheduling changes, consolidation, or logic updates in a scheduled job.
  - `WORKFLOW`: Needs changes to MC task structures, `task-orchestrator`, or overarching pipelines.
- **Trigger:** `recursive-improvement.sh` (or integrated into `weekly-self-improvement-review`).

### 3. Promote (Artifact Generation)
- **What:** Converting a high-signal reflection into a trackable candidate.
- **Where:** `memory/improvement-candidates/candidate-YYYYMMDD-HHMM.md`
- **Content:** The problem, the proposed solution (exact diffs or specs), and the acceptance criteria.
- **State:** `[PROPOSED]`

### 4. Apply (Execution)
- **What:** The physical mutation of the workspace (modifying `SKILL.md`, `jobs.json`, etc.) based on the candidate.
- **Action:** A subagent or human operator reviews the candidate and merges the changes.
- **State:** `[APPLIED]` (along with a commit hash or timestamp).

### 5. Verify (Recidivism Check)
- **What:** A delayed check (e.g., 7 days after application) to see if the problem occurred again.
- **Action:** The system checks `memory/reflections.md` for similar errors post-application.
- **State:** `[VERIFIED]` (or `[REVERTED]` / `[ITERATING]`).

## Integration Points

- **Daily Soul Review (`scripts/crons/daily-soul-review.sh`):**
  Prompts the agent to write into `reflections.md`. Feeds the CAPTURE phase.
  
- **Recursive Improvement Script (`scripts/crons/recursive-improvement.sh`):**
  Scans `reflections.md` for HIGH/CRITICAL signal entries. Generates candidate markdown files in `memory/improvement-candidates/` (CLASSIFY & PROMOTE). Prompts for VERIFY on old applied candidates.

- **Weekly Self Improvement (`scripts/crons/weekly-self-improvement-review.sh`):**
  Reviews all candidates in the `[PROPOSED]` state and delegates their execution (APPLY).

## Templates
- **Candidate Template:** `docs/templates/improvement-candidate.md`

## Definitions for Next Phases
- **Phase 4 (Visualize):** Visualizes the flow of candidates through the PROPOSED -> APPLIED -> VERIFIED states. Handled via the `weekly-self-improvement-review.sh` generated reports, which summarize the pending funnel and candidates awaiting verification.
- **Phase 5 (Enforce):** Actively enforces the learning loop by catching recidivism. Handled via `scripts/enforce-recidivism.py`, which tracks rule violations in `memory/recidivism.json`. Repeatedly broken rules are automatically promoted to `MEMORY.md`. If a promoted rule is broken again, it triggers a mandatory `[PROPOSED]` structural candidate to physically patch the workspace, forcing escalation.
