# Contributing

## Before Editing

- Confirm the change belongs in the SuperAda.ai site repo, not a separate blog/content workflow.
- Check `git status --short` and preserve unrelated changes.
- Use a branch and PR for normal changes.

## Verification

Run the closest available checks before opening a PR:

```bash
npm ci
npm run build
npm run clawhub:plan
npm run ctrl:gate --if-present
```

For UI changes, include screenshot or video proof and note the production URL checked after deploy.
