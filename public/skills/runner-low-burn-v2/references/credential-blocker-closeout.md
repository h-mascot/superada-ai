# Credential Blocker Closeout Pattern

Use this when a low-burn autonomous runner reaches a late-stage issue that requires a protected vendor credential, e.g. Stripe sandbox hardening.

## Pattern

1. Reconcile live worker state first.
   - Confirm no active worker/reviewer process exists for the repo/issue.
   - Read driver/run-state and identify current issue/status.

2. If the issue requires vendor credentials, check presence only.
   - Inspect the protected runner env and repo env files for variable names.
   - Report variables as present/absent or set/empty only.
   - Never print raw secret values.

3. If the operator asks whether the key may exist in Vaultwarden/Bitwarden:
   - Run `bw status --raw` or equivalent first.
   - Note server URL/account/status.
   - If locked, stop there. Do not ask for or type the master password.
   - If already unlocked, search item names and field names; report item titles/metadata only, not secret values.

4. Fail closed when credentials are unavailable.
   - Record the blocker in runner state/Linear/receipt.
   - Suppress worker launch with a clear processStatus like `launch_suppressed_prerequisite_credentials_unavailable`.
   - Name the exact unblock action: provide approved sandbox credentials through protected env, then run one narrowed implementation envelope.

## Why this belongs in low-burn

Credential-missing issues are a classic token sink: the agent can spend hundreds of thousands of tokens building around a fake integration and still not truthfully verify the slice. The correct low-burn behavior is not clever coding; it is verified absence, hard blocker, and no worker launch.

## Example variable set

Stripe sandbox blockers often involve names like:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_API_KEY`

These names are safe to report. Values are not.
