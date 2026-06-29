# Max AI brief UI plan

Frontend-design skill applied.

## Layout wireframe

┌──────────────────────────────────────────────────────────────┐
│ Hero: title, thesis, action buttons     │ Signal cards        │
│ Max AI Vertical Ops Assistant           │ B2B→B2B2C           │
│ Operator first, customer second         │ 6 verticals         │
│                                         │ $100/mo test        │
├──────────────────────────────────────────────────────────────┤
│ Sticky horizontal nav                                         │
├──────────────────────────────────────────────────────────────┤
│ 2 callout cards: recommendation + new Andy vertical screen    │
├──────────────────────────────────────────────────────────────┤
│ Vertical priority board: HVAC, Plumbing, Electrical,          │
│ Property Mgmt, Insurance Agencies, Real Estate Teams          │
├──────────────────────────────────────────────────────────────┤
│ Product brief sections in stacked cards                       │
│ Problem, Insight, Customer, Concept, Model, MVP, GTM, Risks   │
├──────────────────────────────────────────────────────────────┤
│ Name grid + Next steps checklist                              │
└──────────────────────────────────────────────────────────────┘

## Theme
- Dark operator dashboard style.
- Use oklch variables instead of generic blues.
- Avoid bootstrap blue.
- High contrast text, semantic tags, sticky nav.
- Mobile-first: one-column layout on narrow screens.

## Interaction
- Sticky nav anchors.
- Button to next steps.
- Print/save PDF button.
- Hover lift on cards and vertical rows, respecting reduced motion.

## Accessibility
- Semantic header/nav/main/section.
- h1 then h2/h3 hierarchy.
- Strong color contrast.
- Buttons have clear labels.
