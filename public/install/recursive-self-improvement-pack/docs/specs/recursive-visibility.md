# Phase 4: Recursive Ops Visibility Layer

## Objective
Provide a unified view of the recursive improvement pipeline so we can track the health of self-healing mechanisms, identify bottlenecks, and monitor recidivism trends without manually scanning logs.

## Components
1. **Candidate Funnel Tracker**: Parses `memory/improvement-candidates/` to group candidates by status (`[PROPOSED]`, `[APPLIED]`, `[VERIFIED]`, etc.). Identifies stalled items (bottlenecks).
2. **Recidivism Monitor**: Reads `memory/recidivism.json` to extract rules that are failing ("not sticking"), recent violations, and promoted fixes (e.g., rules moved to active policies or escalated).
3. **Recent Learnings**: Summarizes the latest high-signal learnings from `memory/reflections.md`.
4. **Visibility Generator Script**: `scripts/crons/generate-recursive-visibility.py` runs to output a Markdown report to `output/self-improvement/visibility-report-LATEST.md`.

## Integration
This visibility artifact provides the dashboard/report that feeds into Phase 5 (Recidivism Enforcement) and enables operators or higher-level agents to see the true flow of self-improvement (or where it is stuck).
