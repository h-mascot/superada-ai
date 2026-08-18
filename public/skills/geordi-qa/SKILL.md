---
name: geordi-qa
description: Verify a built product surface after implementation. Checks build identity, user-visible browser behavior, accessibility basics, console/network evidence, screenshots or video, and a final PASS/PARTIAL/FAIL decision.
version: 1.0.0
author: Enterprise Crew
license: MIT
metadata:
  hermes:
    tags: [qa, browser, accessibility, screenshots, product-verification, evidence]
    related_skills: [qa-evidence, geordi, runner, runner-low-burn-v2]
---

# Geordi QA

Geordi QA is the product-surface verification gate after implementation.

It does not replace unit tests, CI, code review, or Runner proof gates. It checks the thing a user can touch: the deployed or locally served UI, the route set, the viewport behavior, focus behavior, console/network health, and build identity.

## When to use

Use this skill when:

- a UI or user-facing workflow has just shipped;
- Runner, Runabout, Codex, Cursor, Claude Code, or another builder claims implementation is complete;
- a deploy needs proof that the live URL matches the intended commit;
- mobile, keyboard, accessibility, or browser-console regressions would matter;
- a review needs screenshots, video, or route evidence instead of prose.

Do not use this skill as a substitute for implementation tests. Run it after the normal build/test gates pass, or label the QA run as blocked by those gates.

## Inputs

Collect these before QA:

- target URL or local dev-server route;
- expected repository and commit SHA;
- route list or user journeys to exercise;
- required viewports, at minimum desktop and mobile for public web work;
- expected authentication state, if any;
- acceptance criteria from the issue, PRD, Super Spec, or Linear ticket;
- proof output directory.

If build identity cannot be established, stop and return `PARTIAL` or `FAIL`. A pretty screenshot of the wrong build is still the wrong build.

## Procedure

1. **Verify build identity**
   - Capture the expected git commit.
   - Read the app-reported commit, deployment metadata, or page marker when available.
   - If the target is local, record the branch, HEAD, and dev-server command.
   - If the target is remote, record HTTP status and any deployment identifier.

2. **Exercise the route set**
   - Visit every required route or journey.
   - Record HTTP status, browser console errors, and obvious network failures.
   - Do not treat the first page loading as full route coverage.

3. **Check desktop and mobile behavior**
   - Capture desktop screenshot evidence.
   - Capture mobile viewport screenshot evidence.
   - Look for overflow, clipped controls, unreadable text, modal traps, and layout collapse.

4. **Check keyboard and focus**
   - Tab through critical controls.
   - Confirm visible focus does not vanish.
   - Confirm forms, dialogs, menus, and primary actions can be reached without mouse-only assumptions.

5. **Check accessibility basics**
   - Confirm meaningful page title and landmark structure where applicable.
   - Confirm buttons/links have readable names.
   - Record obvious missing alt text or contrast/focus issues as findings.

6. **Record proof**
   - Save screenshots, logs, route table, console summary, and optional video.
   - Bind every artifact to target URL, commit, timestamp, viewport, and route.

7. **Return one verdict**
   - `PASS`: expected build verified, required routes exercised, no actionable P0-P2 issues.
   - `PARTIAL`: useful proof exists, but external drift, auth, missing build identity, or scoped gaps prevent a clean pass.
   - `FAIL`: product behavior breaks acceptance criteria or decisive QA evidence is missing.

## Output receipt

Write a short receipt with:

- target URL and commit under test;
- route coverage count;
- viewport coverage;
- console/network summary;
- screenshots/video paths;
- findings grouped by severity;
- final verdict and remaining blockers.

## Quality bar

- Evidence beats narrative.
- Build identity comes before screenshots.
- Desktop-only proof is incomplete for public responsive UI unless mobile is explicitly out of scope.
- A worker exit, green CI run, or ticket state does not prove product QA.
- If evidence disagrees, report the disagreement instead of forcing green.
