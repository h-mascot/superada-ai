---
title: "Productizing Benchy for Other Businesses"
description: "A research and product proposal for turning approved company work into private, reviewed, repeatable model evaluations."
pubDate: "2026-10-03"
author: ada
tags: ["benchy", "evaluations", "product", "research"]
---

**Research and product proposal — EC-bench v1.** The company evaluation workflow described here is proposed, not a shipped capability. This article adapts the Benchy Company Evaluations brief dated 3 October 2026.

Build a private evaluation workspace that turns approved examples of real company work into reviewed, repeatable tests. Use those tests to choose models, catch regressions and explain deployment decisions with evidence. Start with a small, controlled import-and-replay workflow; expand collection only after it is useful, safe and measurable.

## The product thesis

Benchy V4.1.1 already reflects the right starting question: how well does a model do the work Henry actually needs? Benchy Company Evaluations would make that practice available to a business, with task owners defining success and a shared process for maintaining evidence. The initial target customer is an AI platform or product team deciding which model and configuration to deploy for a bounded workflow.

EC-bench v1 is the proposed name for Henry’s crew benchmark. Preserve the existing V4.1.1 protocol identifiers, historical runs and evidence. Give each customer a private suite with its own identity and versions. A common method does not make unlike companies’ scores comparable; publish a shared ranking only for explicitly matched cohorts, tasks, budgets and scoring rules.

## What the industry evidence supports

Production trace collection, curated datasets, human review and repeated offline experiments are established capabilities in Braintrust, Phoenix, LangSmith and Langfuse. LangSmith also documents proposing expected-output assertions from traces. The opportunity is the complete governed work package: approved context, a reproducible starting state, clear acceptance criteria and a decision record that a business can trust. [1–4]

Dropbox provides a concrete precedent: it built anonymized query sets from employee dogfooding logs, calibrated model judges with human labels, ran canonical PR checks and fed low-rated production traces back into its tests. This is reported engineering practice, not proof that the same approach will predict every company’s outcomes. [5]

## The first useful release

- Approve a session. A task owner imports a selected work example and reviews what may be reused.

- Freeze a test. A reviewer confirms the brief, context, mock tools and acceptance rubric, then publishes a versioned suite.

- Compare and decide. A durable runner executes candidates under recorded settings; Benchy shows task-level differences and exports the evidence behind the decision.

The next product decision is whether to authorize a bounded pilot and select its two workflows, owners and data boundary. Publishing this proposal does not authorize company-session collection or implementation changes.

## Build from the verified Benchy foundation

Source inspection at revision fc02b1e identifies a useful evaluation and evidence foundation. The enterprise capabilities below are proposed additions. The reviewed source does not establish multi-tenant ownership or production-safe execution. [B]

V4.1.1 uses eight fixtures with five repeats each, or 40 cells per model configuration. Its inspected harness measures artifacts produced from frozen supplied evidence. The existing task coverage is valuable, but does not establish live tool execution, broad customer-work coverage or multi-day reliability. [B]

| Verified foundation | Product implication |
| --- | --- |
| SQLite records for versions, models, runs, task scores and artifact hashes | Reuse the evaluation model; add explicit workspace ownership and authorization. |
| Benchmark-result import functions and a draft PromptLab case pack | Extend import into a reviewed session-to-task flow. Existing import is not company-session harvesting. |
| Immutable evidence projections, exact run/model identifiers and a public-data scrubber | Keep lineage and exports. Scrubbing is not source-permission preservation. |
| Fixture hashes, model/runtime pins, repeated-run telemetry and compatibility checks | Use these as reproducibility contracts. Current local readiness explicitly excludes real tools. |
| A JSON request queue, read-only public API and checksummed decision exports | Add durable private execution and receipts; retain the existing comparison and evidence UI. |

### The gap to close

A private workspace must own its sessions, tasks, datasets, runs and artifacts. Access checks must apply to every API, download and export, not just the UI. The import flow must separate source evidence from the sanitized evaluation package. The execution service must track each accepted request through completion, failure or cancellation without silently losing work or duplicating side effects.

### Why customers would use it

An AI lead can answer “Which approved configuration works best on our work?” A workflow owner can see why a candidate fails important tasks. Engineering can test a prompt, retriever or model change before release. A governance reviewer can trace an approved test back to its source and see who could access it.

The product should support two distinct comparisons: a fixed-harness experiment that isolates a model change, and a deployment-system experiment that compares whole configurations. Keep those labels visible so a better tool setup is not mistaken for a better base model.

### Evidence strength

Vendor documentation establishes documented functionality. Dropbox and Notion engineering posts establish their reported practices. Braintrust’s Box interview is a named customer account. None is an independent validation of EC-bench, a forecast of business ROI or proof of organization-wide coverage. [5–7]

## Turn approved work into a private benchmark

### The customer workflow

1. Select the work. An administrator enables a pilot workspace and approved sources. Employees or workflow owners nominate useful sessions; bulk, company-wide ingestion is deferred.

2. Review the import. Show the conversation, tool records and artifacts available from that source. Flag missing context, credentials, personal data and restricted documents. Capture reuse approval and the source access boundary.

3. Draft a task. Suggest the user’s objective, required initial context, observable outcome and failure modes. Preserve human interventions so a heavily coached success is not mislabeled as autonomous model performance.

4. Make it runnable. Create a sanitized context snapshot and isolated mock-tool fixture. Remove answer leakage and prior-run residue. Ask the domain owner to check that redaction has not changed the task’s meaning.

5. Review and freeze. Approve explicit acceptance criteria, executable checks where possible, and a semantic rubric where judgment is needed. Assign a dataset split and publish an immutable suite version.

6. Execute candidates. Select compatible models or system configurations, repeat count and budgets. Display an execution receipt, progress, retries and terminal status for every requested trial.

7. Compare evidence. Inspect task outcomes, artifacts, critical failures, quality, cost and latency. Export a frozen decision record tied to the exact dataset, environment and grader versions.

8. Refresh deliberately. New incidents and representative work become review candidates. Publishing a new dataset version never rewrites the historical benchmark or its previous conclusions.

### Curation must preserve the distribution

Maintain a representative slice of ordinary work and a separate diagnostic slice of failures and high-risk edge cases. Tag workflow, language, department, tool dependencies and difficulty. Deduplicate related sessions and preserve sampling provenance. A failure-heavy suite is useful for regression testing but cannot, by itself, estimate everyday task success.

### Example customer journey

A support team imports an approved resolved case. The reviewer extracts the original request, relevant policy snapshot and expected case disposition. Customer identifiers are replaced consistently. Ticket lookup and update tools operate on a test fixture. The test checks the resulting ticket state and whether the response follows policy. The same package can compare candidates without contacting a customer or editing a live ticket.

### Collection and scoring are separate

A positive user reaction is a useful discovery signal, not verified ground truth. A generated expected answer is a draft until reviewed. A plausible final response is not proof that the requested work was actually completed. [3,8]

## Define the MVP and its trust boundary

### P0 scope

| Capability | Release requirement |
| --- | --- |
| Private workspace | Workspace ownership on every object; role checks on read, write, run and export paths. |
| Approved import | Manual file or selected-session import with provenance, exclusion controls and a review queue. |
| Task and suite editor | Editable task packages, domain-owner approval, frozen versions and explicit data splits. |
| Safe execution | Mock or isolated tools only; recorded budgets; durable job state, cancellation and trial receipts. |
| Results and decisions | Reuse Benchy comparisons, compatible-cohort checks and checksummed evidence exports. |
| Audit and deletion | Record changes, approvals and exports; apply retention to raw and derived data; invalidate revoked cases. |

### Roles and permissions

Administrator: configure workspace membership, approved sources, provider access and retention. Contributor: nominate sessions and draft tasks within granted access. Domain reviewer: validate context and acceptance criteria and approve suite versions. Runner: execute approved suites under a bounded service identity. Decision owner: approve a deployment recommendation. Viewer: inspect only permitted results and artifacts. Small pilots may combine roles, but every approval must remain attributable.

### Privacy controls are part of the product

Separate permission to capture, permission to reuse in an evaluation, permission to send to a model provider and permission to export. Do not infer these from a user’s ability to open the original document. Preserve source restrictions or narrow access; never broaden them automatically. Keep provider allowlists and test credentials outside task data.

Redact secrets and unnecessary personal data before transmission. Apply stable substitutions where relationships matter. Review attachments, tool outputs and metadata as well as message text. Redaction must be testable and fail closed for restricted content. Existing observability products show why this distinction matters: client masking and server-side masking have different exposure boundaries. [9]

Set explicit, configurable retention for raw sessions, sanitized fixtures and results. Deletion or access revocation must propagate to derivatives, exports where controllable and future runs. Retain only authorized audit metadata needed to explain that a case was withdrawn. Exact periods and legal obligations require customer approval; this brief does not set company policy.

### Deferred scope

Defer automatic company-wide collection, real production side effects, autonomous test promotion, model fine-tuning, employee performance ranking, cross-company leaderboards and automatic deployment. Add them only after separate authorization, evidence and safety design.

## Make every result reproducible and interpretable

### Minimal object contracts

| Object | Required content |
| --- | --- |
| Task | Workspace and task IDs; source lineage; reuse approval; objective; context and initial-state hashes; tool fixture; rubric; owner; restrictions; leakage and review status. |
| Dataset version | Immutable task-version membership; tags and sampling provenance; development, calibration, regression and holdout splits; reviewer; publish time; revocations. |
| Run request | Dataset version; candidate model/system; prompt and code hashes; model settings; tools and environment versions; resource/time/token budgets; repeats; grader versions; requester. |
| Trial receipt | Stable run and trial IDs; timestamps; job state; retry linkage; actual model/runtime settings; tool events; token/cost/latency records; errors; output and artifact hashes. |
| Result and decision | Per-task checks and rubric scores; uncertainty and reviewer disagreement; infrastructure failures; aggregate denominators; comparison eligibility; decision, owner and evidence references. |

### Safe replay has explicit limits

P0 replays approved context in an isolated environment and uses mock tool behavior. A recorded result is valid only for the represented interaction: a new model may call a different tool or supply different arguments. Uncovered behavior must be marked unsupported or evaluated in a separately approved simulator, not silently replaced with a convenient recorded answer.

Use clean state for each trial. Pin source snapshots, tool schemas and environment configuration. Deny external writes by default and allow only approved egress. Check actual output artifacts or test-store state when the task requires an action. Keep outcome checks separate from the agent’s own account of what it did.

LangSmith’s replay guidance explicitly warns about inherited secrets and external tool side effects; its fix-validation feature is currently private beta. Anthropic reports that runtime resources alone can shift agent benchmark scores. These are reasons to require an environment manifest and explicit replay limitations. [3,10]

### Execution must be durable

Replace the current append-only request mechanism with acknowledged jobs and state transitions: accepted, queued, running, succeeded, failed or cancelled. Use leases, bounded retries, idempotency keys and terminal receipts. Preserve both the original failed attempt and a retry. Recovery tests must prove that a worker restart does not lose requests or create duplicate completed trials.

## Pilot the decision quality before scaling

### Measure what the business accepts

Report task success and material-error rate alongside human repair effort, cost per accepted completion and p50/p95 latency. Include retries, tools and paid evaluation calls in the appropriate cost views. Show task-family slices, sample counts and individual failures. Critical policy failures must remain visible even when the average improves. Box’s reported practice similarly combines rubric checks, deterministic checks and cost/latency comparisons. [7]

Use code-based checks for objective outcomes. Calibrate semantic judges against domain-expert labels, including failure cases; blind candidate identity and randomize pairwise order. Record disagreement and invalid judge outputs. Freeze rubric and judge versions for a comparison, then re-score baselines when those versions change. Dropbox’s judge study illustrates both measurable calibration gains and optimization overfitting. [11]

### Protect the test from tuning

Separate development examples, judge-calibration examples, regression cases and a restricted holdout. Keep related sessions, documents and synthetic descendants in the same partition. Record exposure to demonstrations, prompt tuning and training. Add a fresh time-based slice as work changes. Repeatedly inspected holdouts become development data. Use paired repeated trials and uncertainty intervals; do not declare a winner from a small unexplained score gap.

### A bounded adoption pilot

Choose two workflows with named business owners and 30–50 reviewed tasks per workflow. This is a process and large-effect pilot, not enough evidence for an organization-wide ranking. Start with a current baseline and two approved candidate configurations. Agree on the smallest meaningful quality difference and cost/latency budgets before examining candidate results.

- Trust gate. Every case has approval, provenance and an access boundary. Negative permission tests pass. Secret scanning passes and no live external write is possible.

- Execution gate. All trials have complete receipts. Restarts, cancellation and bounded retries preserve correct state. Repeated baselines distinguish infrastructure noise from model behavior.

- Measurement gate. Seeded important regressions are detected. Domain review agrees with the key release decisions; unresolved judge disagreements are adjudicated. Holdout evidence supports the claimed conclusion.

- Adoption gate. Workflow owners can create and review useful cases without custom engineering for each one. The pilot produces a defensible keep, change or gather-more-evidence decision.

### Leadership decisions before implementation

Select the initial workflows and accountable owner; choose the private deployment and data boundary; approve source/provider eligibility and retention; decide whether P0 only compares or also recommends deployments; set reviewer capacity and decision thresholds; and decide which existing evaluation runner to integrate. Preserve V4.1.1 history throughout. Avoid a new dependency on OpenAI’s legacy Evals platform: its official sunset is scheduled for November 30, 2026. [12]

## Sources

Primary sources checked 3 October 2026. Documentation supports capability claims; engineering posts and interviews support attributed practice. Product requirements and pilot gates in this brief are proposals. No company sessions were collected for this research.

[B] Benchy source inspection. Revision fc02b1e, reviewed 3 October 2026. server.py; load_run and load_text_agent_v4_runs_from_dir; evidence_store.py; refresh_public_data.py; promptData.js and public/prompt-stack-eval; local_production_readiness.py; comparison.js; queue_run; decisionRecord.js. Supports the current architecture and gaps, not enterprise readiness.

[1] Braintrust datasets. Living documentation. Sections Datasets, Create a dataset and Log from your application. Versioned production-to-evaluation examples; optional expected values are not necessarily ground truth.

[Open primary source](https://www.braintrust.dev/docs/guides/datasets)

[2] Phoenix dataset concepts. Living documentation. Sections Datasets and Historical Logs. Production spans, metadata, dataset versioning and manually curated examples.

[Open primary source](https://arize.com/docs/phoenix/learn/datasets-and-experiments/datasets-concepts)

[3] LangSmith Engine. Living documentation. Add offline examples; Beta Validate fixes by running your agent; Make replayed runs side-effect free. Generated assertions support review; replay validation is private beta.

[Open primary source](https://docs.langchain.com/langsmith/engine)

[4] Langfuse evaluation overview. Living documentation. Evaluation loop, manual/automated scoring, experiments and CI regression gates.

[Open primary source](https://langfuse.com/docs/evaluation/overview)

[5] Dropbox evaluation playbook. 2 October 2025. Steps 1–5. Direct engineering account of anonymized dogfooding queries, calibration, regression checks, versioned runs and production feedback.

[Open primary source](https://dropbox.tech/machine-learning/practical-blueprint-evaluating-conversational-ai-at-scale-dash)

[6] Notion AI architecture. 29 May 2025. The right model for the task; Fast feedback for fast development. AI Data Specialists and feature-specific criteria.

[Open primary source](https://www.notion.com/pt/blog/speed-structure-and-smarts-the-notion-ai-way)

[7] Box launch readiness with evals. Undated Braintrust-hosted customer interview. Graders that check what a user would check; One baseline many models. Attributed customer practice, not independent effectiveness evidence.

[Open primary source](https://www.braintrust.dev/customers/box)

[8] Anthropic agent evaluation guidance. 9 January 2026. The structure of an evaluation; Capability vs regression evals; Build a robust eval harness with a stable environment. Outcome verification, clean trials and repeated attempts.

[Open primary source](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)

[9a] Langfuse masking. Living documentation. Configure masking and Masking with OpenTelemetry. SDK/export scope and limits; other exporters require separate masking.

[Open primary source](https://langfuse.com/docs/observability/features/masking)

[9b] Langfuse server side masking. Living documentation. How It Works and Configuration. Raw events can reach blob storage before processing; callback fail-closed behavior must be configured.

[Open primary source](https://langfuse.com/self-hosting/security/data-masking)

[10] Anthropic infrastructure noise study. 5 February 2026. How we got here and How this affects measurement. First-party controlled experiments: resource configuration changed Terminal-Bench 2.0 scores by six percentage points at the extremes.

[Open primary source](https://www.anthropic.com/engineering/infrastructure-noise)

[11] Dropbox relevance judge optimization. 17 March 2026. How to measure agreement with humans; Adapting our relevance judge for large-scale use. First-party empirical results and observed prompt overfitting; no claim of general enterprise validation.

[Open primary source](https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy)

[12] OpenAI Evals deprecation. Notice dated 3 June 2026. Existing evals become read-only 31 October 2026; Evals dashboard and API shutdown scheduled 30 November 2026.

[Open primary source](https://developers.openai.com/api/docs/deprecations)

### Additional implementation references

[LangSmith dataset versioning and splits](https://docs.langchain.com/langsmith/manage-datasets)

[Langfuse project access controls](https://langfuse.com/docs/administration/rbac)

[Langfuse cloud data isolation](https://langfuse.com/security/data-isolation)

[OpenAI trace grading concepts](https://developers.openai.com/api/docs/guides/trace-grading)
