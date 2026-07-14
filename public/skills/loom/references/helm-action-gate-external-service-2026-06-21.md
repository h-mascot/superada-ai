# Action Gate is an external service — do not build it inside the named product (2026-06-21)

## Trigger

During the Helm Grill → SuperSpec → PRD → Linear flow, a short user message arrived in-thread:

> Spawn sub agent Make Ada observer set action gate ..

A `subagent-driven-development` worker was dispatched against `<HOME>/Code/helm` to build a Helm-internal Action Gate / Ada observer implementation, producing 10 files / +1289 LOC including a Helm-side authority library, three Next.js API routes (`/api/action-gate/decide`, `/api/action-gate/observer`, `/api/action-gate/health`), a panel UI, and a 218-line test file. The build was technically clean (`tsc` clean on the new code, 15/15 tests pass) but **on the wrong surface**.

The user's actual intent was: use the **Action Gate plugin** (already running as a separate multi-agent coordination/guardrail service on Enterprise) to set Ada as the observer for the Helm Spec Discord thread. There was no Helm-side work to do.

## How the misread happened

Three failures stacked:

1. **Ambiguous user phrase.** "Set Ada observer using Action Gate" was parsed as "set up an Action Gate / Ada observer feature for Helm," not "set Ada as the Action Gate observer for the current thread." The named product (Helm) was the surface the worker built on, but the named feature (Action Gate) is a separate system.
2. **No pre-flight cross-system check.** A 30-second `ls <HOME>/Code/agent-action-gate` would have shown that Action Gate is its own plugin repo with a live service (`http://127.0.0.1:8787/health` → ok), a YAML config, and a state file already containing the Helm Spec thread scopes with `observer_agents: [ada]`. The build brief did not include that check.
3. **Subagent committed to the wrong path quickly.** The worker took the natural reading of the brief and shipped working code. By the time the parent verified, the diff was real and the user's correction was the next move.

## The correct disambiguation protocol (≤30 seconds, before dispatch)

Before any subagent build brief that pairs a feature name with a product name, run a two-question disambiguation:

1. **Is the feature already a separate service/plugin in the user's stack?** Probe the obvious roots: `<HOME>/Code/<feature>`, `~/.hermes/plugins/`, the user's `~/.config/<stack>/`. If yes, the task is "wire it in," not "build it."
2. **Does the user's message read as a state change ("set X as Y for Z") or a feature request ("build X inside Y")?** "Set Ada as observer for this thread" is state change, not a feature request.

If both point to "wire it in," the brief should be: "verify the existing service/plugin is healthy, confirm the policy/observer setting in the config, and report a receipt." No build, no diff, no commit. A 200 line receipt in the run output is the right answer.

## Concrete receipts from the bad run

- Subagent diff: 10 files / +1289 / -1 in `<HOME>/Code/helm` (`src/lib/action-authority.ts`, `src/lib/action-authority.test.ts`, `src/app/api/action-gate/{decide,health,observer}/route.ts`, `src/app/components/ActionGatePanel.tsx`, `src/app/action-gate/page.tsx`, plus cross-link edits in `OpenClawAdminRoot.tsx` and `AgentPushPanel.tsx`).
- Disposal: `git reset` + `git clean -fd` for the off-target paths, then `rm -rf` for the leftover empty `src/app/action-gate/`. The Helm tree was returned to the pre-subagent state (only pre-existing untracked items remain: `codedb.snapshot`, `docs/specs/`, `token-usage-extract/`).
- Real Action Gate state at the time of correction:
  - Service: `http://127.0.0.1:8787/health` → `{"ok":true,"service":"agent-action-gate"}`
  - Config: `<HOME>/Code/agent-action-gate/config/herald-labs-scopes.yaml`
  - State: `<HOME>/Code/agent-action-gate/.action-gate/herald-labs-state.json`
  - Helm Spec thread scopes already configured: `discord:1508780411914813440:1518004202146627796`, `discord:default:1518004202146627796`, `owner_agent: book`, `observer_agents: [ada]`, `mode: enforce`
  - Probe proof: `book` and `ada` both allowed; `zora` denied.

## Reconciliation pattern (when the misread already happened)

1. **Stop further work on the wrong surface.** Kill the worker, do not let it continue.
2. **Verify the actual system exists and is correctly configured.** The real work was already done by the existing plugin; produce a verification receipt, not a build.
3. **Reconcile the spec/PRD/issue artifacts.** The bad framing may have leaked into SuperSpec, PRD, repo context pack, and Linear titles. Reframe every "Action Gate/Ada observer" reference to "external Action Gate service called over HTTP for dangerous-action evidence" and re-title affected Linear issues via `issueUpdate`. Add a top-of-file `## Scope correction (date)` callout to spec/PRD/context-pack so a future reader cannot mistake the bad framing for canonical text.
4. **Write a correction receipt** with the original framing, the corrected framing, the SHA chain of reframed files, the Linear issue IDs that were retitled, and the verification queries used.
5. **Memory update.** Add a single-line rule: "When the user mentions a feature name plus a product name, first check whether the feature is already a separate service/plugin in the user's stack."

## Why the Subagent-Driven-Development skill did not catch this

The skill's existing `parent-verify-recipes` and `proactive two-pass split` cover many failure modes, but the "wrong target surface" case is upstream of the build brief itself — the brief was bad before the subagent saw it. The fix is at the brief-writing stage, not the verify stage. The disambiguation protocol above is the prevention.

## Related skills to load when this comes up

- `subagent-driven-development` — the worker that was dispatched.
- `local-model-orchestration` — the plugin runtime where Action Gate lives; useful for `curl /v1/...` and process state checks.
- `using-agent-skills` — for the "is there a skill for this?" check before any brief.
