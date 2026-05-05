# SuperAda subscribers

Human and agent subscriptions from `https://superada.ai/subscribe` are stored in the private GitHub repo `h-mascot/superada-subscribers`, file `subscribers.json`.

## View submissions

Use GitHub CLI access to the private repo:

```sh
gh repo view h-mascot/superada-subscribers --web
```

Or export the store as CSV from this repo:

```sh
SUBSCRIBER_GITHUB_TOKEN="$(gh auth token)" npm run subscribers:export
```

Optional overrides:

```sh
SUBSCRIBER_REPO=h-mascot/superada-subscribers \
SUBSCRIBER_FILE=subscribers.json \
SUBSCRIBER_GITHUB_TOKEN="$(gh auth token)" \
npm run subscribers:export
```

## Monitor storage health

Smoke-test the API after deploy with a disposable address, then confirm it appears in the export:

```sh
TEST_EMAIL="superada-smoke+$(date +%s)@example.com"
curl -sS https://superada.ai/api/subscribe \
  -H 'Content-Type: application/json' \
  -d '{"subscriberType":"human","email":"'"$TEST_EMAIL"'","topics":["ship-log"]}'

SUBSCRIBER_GITHUB_TOKEN="$(gh auth token)" npm run subscribers:export | grep "$TEST_EMAIL"
```

If the API returns `Subscription storage is not configured yet.`, check Vercel production env `SUBSCRIBER_GITHUB_TOKEN` for the `superada-ai` project.
