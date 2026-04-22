# Recidivism-Driven Promotion Policy

## Core Concept
When a rule or lesson is violated repeatedly despite being tracked, it is considered "recidivism". Repeated failures indicate that soft memory is insufficient to guide behavior. We must **promote** the rule into a structural guardrail.

## Thresholds
- **1-2 Violations:** Handled softly via `~/clawd/memory/recidivism.json` tracking.
- **3 Violations (or 2 for Critical Severity):** The rule is marked `notSticking: true`.
- **Promotion Trigger:** Any rule with `notSticking: true` that has not yet been promoted (`promoted != true`).

## Escalation Logic (The Promotion)
When a rule hits the promotion threshold, the following actions occur:
1. **System Memory (Hardening):** The rule's `fix` or `note` is immediately injected into `~/clawd/MEMORY.md` under the `## Promoted Guardrails (Enforced)` section. This forces it into the active context window for all subsequent operations.
2. **State Update:** The rule in `recidivism.json` is marked with `"promoted": true` and a timestamp.
3. **Review/Notification:** A notification is generated (or logged) to alert the operator that a rule required structural enforcement.

## Future Hooks (Phase 2/3/4 Integration)
- **Phase 2/3 (Agents & Reflection):** If a promoted rule continues to be violated (e.g., hits 5 violations), the promotion script should escalate further by spawning a subagent to rewrite the relevant `SKILL.md` or create a wrapper shell script that physically prevents the action.
- **Phase 4 (Visualization):** Phase 4 should visualize the "Correction Rate" array from `recidivism.json` over time, and provide a dashboard widget showing the ratio of "Soft Rules" vs "Promoted Rules". When a rule transitions to "Promoted", it should trigger a visible alert in the dashboard.
