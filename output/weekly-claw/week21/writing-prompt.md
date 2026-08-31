You are writing the public copy plan for a Weekly Claw changelog and developer-experience HTML deck.

Read `source-packet.md`. Produce `deck-copy.json` only, as valid JSON with this shape:
{
  "week": 21,
  "date": "August 21, 2026",
  "thesis": "...",
  "slides": [
    {"id":"s1","type":"title","label":"...","title":"OpenClaw Change log & Dev Experience","accent":"...","lead":"...","cards":[{"title":"...","items":["..."]}]}
  ]
}

Requirements:
- Exactly 12 slides.
- Slide 1 title must be exactly `OpenClaw Change log & Dev Experience` and use the accent/tagline to identify Week 21.
- Include a release-window slide that explicitly says no stable release shipped inside the Aug 14–21 window and identifies v2026.8.1-beta.2.
- Include a numbers/community pulse slide with 2,193 commits, 89 authors, and the named top authors.
- Group product work into themes, not release-version slides. Cover: secrets and plugin provenance; backup/recovery; runtime/model switching and local setup; channel ingress/Control UI/CDP; external supervision/MCP dashboards.
- Exactly three consecutive Developer Experience slides titled exactly `DX review`, `Community signal`, and `Signal map`.
- The final slide is a general weekly close with a concrete takeaway and no recap filler.
- Public-facing copy only. No process commentary, no presenter instructions, no claims beyond source-packet.md.
- Use short, sharp, spoken English. No em dashes. No hype, binary-contrast templates, faux-insight setups, dramatic fragments, or summary-recap ending.
- Maximum 3 cards per slide and maximum 4 short items per card.
- Use technical names and commands where useful.
- Do not publish, send, or change any external system. Only write the JSON file in this directory.
