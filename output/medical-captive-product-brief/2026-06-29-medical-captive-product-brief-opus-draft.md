# Product Brief v1: Medical Captive Renewal Operations

## Problem
Renewal season is breaking under scale. Medical Captive grew from roughly $15M over ten years to $25M in one year, and expects to approach $40M next year. The work that used to fit in a small team no longer does. Andrew used to build a key spreadsheet twice a week; he now builds it about 35 times a week, and that sheet grew from about 200 lines to nearly 2,500. Many renewals produce 3 to 5 separate proposals per entity. At 30 entities and 5 proposals each, that is 150 outputs. If each output takes about 1.5 hours to review, generate, proofread, authorize, and send, August and September run out of hours. Different team members produce different outputs from the same sheet because of individual bias and skill differences, and handing a renewal from one person to another creates muddiness during variance handling. The spreadsheet is a legacy marker, not the path forward.

## Customer
Medical Captive: small but rapidly growing. Andrew runs operations. Don handles marketing. Headcount moved from roughly 1.3 FTE to 6 FTE and may double again over the next 2 to 3 years. They do not take inbound calls or inbound submissions; submissions arrive by email and are handled by a back office. The toolchain is email, DocuSign, spreadsheets, proposals, partner trading, and broker/client communications. Their stated biggest concern is scalability. Andrew's stated interest is back-office generation and distribution, not intake.

## Why Now
The pain is fresh and seasonal. The fourth quarter effectively starts mid-April and ends around December 12 to 15. Renewal season gathers and runs data through May, creates initial indications, then firms up with data through July, after which clients often ask to also look at August, September, and October. The 35x spreadsheet growth and the FTE ramp show the manual model is already past its limit. The best window to engage is September, October, and November, while renewal wounds are fresh. A follow-up is planned for September 3. Perfect-world target is a system ready to roll around this time next year. Another provider is already working the intake/checklist scoring side, so the open, unclaimed pain is generation and distribution.

## Current Workflow
Packets of information arrive by email and are checked against must-haves, want-haves, and good-to-haves. Data is collected, formatted, and harmonized into a large central spreadsheet. From that sheet, individuals manually generate multiple proposals per entity, proofread, authorize, and distribute them via email and DocuSign, while trading with partners and communicating with brokers and clients. Each iteration spawns new spreadsheet versions, creating risk of cross-contamination, wrong dollar amounts, and mismatched columns across revisions.

## Desired Workflow
A secure broker portal where brokers review proposal options, select the one they want, press a button, and generate a final PDF. The PDF is delivered automatically to the broker and to the client. Medical Captive keeps a legacy copy on its system. Once the final option is selected, the other options disappear to prevent cross-contamination and version drift. Blue-sky shape: an initial 1.0 source-of-truth renewal, with each additional iteration becoming a dropdown option on a website; when broker and client feel confident, they generate the final package.

## Wedge / MVP
Lead with renewal operations and a broker proposal portal. Build a narrow, deliberately ugly MVP that proves value fast: take the existing source sheet for an entity, generate the 3 to 5 proposal variants in a consistent, templated format, and present them in a secure portal where a broker selects one, generates a locked final PDF, and triggers automatic delivery to broker and client plus a retained legacy copy. The moment a final is chosen, non-selected variants are retired so only one source of truth remains. This is workflow automation and source-of-truth control first. AI assistance is deferred to later steps where judgment or summarization clearly helps. Data controls are part of the wedge, not an afterthought: support bulk erase of customer data (Andrew asked specifically about erasing 45 days after project completion), do not train models on customer data, and operate under HIPAA, SOC 2, and ISO compliance.

## Non-Goals
- Not an AI customer support agent. That is a later expansion, not the first product.
- Not intake or checklist scoring. Another provider already covers that side.
- Not document ingestion as the lead capability.
- No overclaiming of AI. The first release is automation and version control, not autonomous judgment.
- Not inbound call or submission handling, since they do not take inbound.

## Risks
- Version-control failures (wrong dollar amounts, wrong columns) would erode trust in the one thing the portal must guarantee: a clean single source of truth.
- Data and privacy exposure of privileged/protected information; erase, retention, and training commitments must hold operationally, not just on paper.
- Template rigidity: proposals may carry more entity-specific nuance than a fixed template captures, reproducing the variance problem inside the tool.
- Adoption risk if the portal does not visibly cut the 1.5-hour-per-output burden during peak August/September load.
- Building too broad. A wide build misses the September-to-November window and the next-year readiness target.

## Falsifiers
- If proposals cannot be reliably generated from the existing source sheet without heavy manual rework, the automation thesis fails.
- If brokers will not adopt a portal and insist on email-only delivery, the portal wedge is wrong.
- If the real bottleneck turns out to be intake/data harmonization rather than generation and distribution, we are leading with the wrong half.
- If proposal variation is too bespoke per entity to template, source-of-truth automation does not reduce hours.
- If compliance or erase requirements cannot be met within the workflow, the deal premise collapses.

## Key Questions
- What is the minimum proposal template set that covers most of the 3-to-5 variants per entity?
- Where exactly do the 1.5 hours per output go (generation, proofread, authorize, send), and which step is most automatable first?
- What does the broker actually need to see to select an option confidently?
- How is authorization/sign-off handled today, and how does it map into the portal (DocuSign integration)?
- What are the precise data retention, erase (45-day post-completion), and access rules required for privileged data?
- How does partner trading data flow into and out of the sheet, and must the portal reflect it?
- What does Kevin, with TPA and broker perspective, flag as missing from this framing?
- What is the smallest single-entity pilot that proves the value before peak season?

## 10 Name Ideas
1. RenewalDesk
2. ProposalForge
3. CaptiveSource
4. OneSheet
5. RenewOps
6. BrokerSelect
7. FinalForm
8. SourceOfTruth Portal
9. RenewalRoom
10. ProposalLock

## Next Steps
- Return with notes, diagrams, a lightweight mockup and flow, and possibly a demo for the September 3 follow-up.
- Bring Kevin onto the next call for TPA and broker perspective.
- Define the single-entity pilot scope and the proposal template set.
- Confirm data handling commitments (no training on customer data, erase support, HIPAA/SOC 2/ISO) in writing for the workflow.
- Target build readiness for around this time next year, with engagement concentrated in September through November while renewal pain is fresh.

Writing route used: citadel-all/pioneer/claude-opus-4-8 (Anthropic Claude Opus 4.8 via llm-task).
