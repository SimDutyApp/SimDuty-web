# SimDuty Wiki - Implementation Roadmap

This roadmap defines the structure, priorities, and quality bar for the SimDuty Wiki hosted in GitHub Pages under `/docs`.

## 1) Current Information Architecture (Published Today)

```text
docs/
  index.html                 -> Wiki hub (published)
  first-run.html             -> First run onboarding (published)
  setup.html                 -> Setup tab guide (published)
  troubleshooting.html       -> Common issues and fixes (published)
  linux-setup.html           -> Linux/Proton setup guide (published)
  home.html                  -> Home tab reference (implemented, deferred)
  hos.html                   -> HOS tab reference (implemented, deferred)
  compliance.html            -> Compliance tab reference (published)
  dispatch.html              -> Dispatch tab reference (published)
  dvir.html                  -> DVIR tab reference (published)
  econ.html                  -> Economy tab reference (planned)
  faq.html                   -> Global FAQ (planned)
  changelog.html             -> Release notes for docs users (planned)
```

Current live flow:

`index.html -> first-run.html -> home.html -> hos.html -> compliance.html -> dispatch.html -> setup.html -> dvir.html -> troubleshooting.html -> index.html`

Optional support path:

`index.html -> linux-setup.html`

## 2) Page Structure Standard

Every internal documentation page should follow a consistent structure:

1. Sticky "On this page" sidebar (desktop) with anchor links
2. Overview block (purpose + expected result + estimated time)
3. Step-by-step workflow with concise action lists
4. Dedicated path/reference block for technical paths and commands
5. Visual evidence blocks (annotated screenshots)
6. Validation checkpoint block (done criteria)
7. Quick support block (symptom -> check -> fix)

Reference implementation for this template:

- `docs/first-run.html`

## 3) Delivery Phases

### Phase 0 - Foundation (Completed)

- Wiki hub created (`docs/index.html`)
- Documentation link added to main site navigation
- Shared docs theme and components created (`docs/docs.css`)
- English-only wiki layout introduced (sidebar + grouped sections + metadata chips)

Deliverable: users can navigate from the main site to a structured docs hub.

### Phase 1 - MVP Coverage (Completed for Today's Release)

- Published in active flow:
  - `docs/first-run.html`
  - `docs/setup.html`
  - `docs/troubleshooting.html`
- Implemented but intentionally removed from current flow:
  - `docs/home.html`
  - `docs/hos.html`
- Completed for this release:
  - Professional English copy pass for published pages
  - Setup coverage aligned with app source of truth
  - Flow simplification to only ship finished content

Deliverable: complete first-use path with setup and troubleshooting guidance.

### Phase 1.1 - Deferred Pages (Completed)

- Finalized and published `docs/home.html`
- Finalized and published `docs/hos.html`
- Reinserted both pages into the main navigation flow

Deliverable: expanded operational guidance integrated into the production docs flow.

### Phase 2 - Daily Operations Coverage (In Progress)

- `docs/compliance.html` (published)
- `docs/dispatch.html` (published)
- `docs/econ.html`

Deliverable: complete operational documentation for recurring usage.

### Phase 2.1 - Cross-platform and SEO Hardening (Completed)

- Published `docs/dvir.html` in production flow
- Published `docs/linux-setup.html` with community workflow attribution
- Added structured data (HowTo/FAQPage) for key operational docs pages
- Completed docs image naming normalization and reference migration

Deliverable: stronger discoverability, cleaner asset taxonomy, and Linux onboarding coverage.

### Phase 3 - Scale and Support (Planned)

- `docs/faq.html`
- `docs/changelog.html`
- Client-side search
- Glossary and quick-reference pages

Deliverable: self-service knowledge base with lower support load.

## 4) Content Backlog by Area

### Home (Deferred)
- Explain score, net profit, trip profit, active trip, and truck health.
- Clarify OFF DUTY / ON DUTY / DRIVING states.
- Add annotated dashboard screenshot.

### HOS (Deferred)
- Cover Drive Left, Shift Left, and Cycle Left.
- Document practical differences across US/CA/EU/BR.
- Explain rest timing and non-compliance impact.

### Compliance
- Where to inspect logs and events.
- How to interpret discrepancies and audit records.

### Dispatch
- Dispatch workflow and operational messaging.
- Delivery status and alert behavior.

### DVIR
- Pre-trip and post-trip inspections.
- Defect logging and recommended actions.

### Economy
- Reading costs, penalties, and margins.
- Using data to improve profitability.

## 5) Asset Requirements

For each page:

- 1 full-screen overview screenshot
- 2-4 flow screenshots
- 1 annotated screenshot (labels/arrows)
- Alt text and caption for every image

Recommended naming:

```text
assets/imgs/docs/docs-<page>-<context>.webp
```

Current real files already used (normalized naming):

- `assets/imgs/docs/docs-first-run-plugins-folder.png`
- `assets/imgs/docs/docs-first-run-sdk-net-ok.png`
- `assets/imgs/docs/docs-first-run-sdk-net-fail.png`
- `assets/imgs/docs/docs-setup-edition-switch.png`
- `assets/imgs/docs/docs-setup-tablet-layout.png`
- `assets/imgs/docs/docs-setup-mobile-layout.png`
- `assets/imgs/docs/docs-linux-step-01-steam-library.png`
- `assets/imgs/docs/docs-linux-step-12-dotnet-installer.gif`

## 6) Language Strategy

- Current wiki scope is English-only.
- Docs pages are static English content (no runtime dictionary on `/docs`).
- Optional multilingual rollout can be planned later after the English baseline is finalized.

## 7) Definition of Done

A docs page is considered complete only when:

- Content is complete (purpose + workflow + FAQ + troubleshooting)
- Screenshots include clear alt text and captions
- Layout is validated at 1200px, 768px, and 375px
- Internal links are verified
- Copy is reviewed for professional tone and consistency

## 8) Immediate Next Steps

1. Run full responsive validation for all published docs pages at 1200px, 768px, and 375px.
2. Verify internal links across all published pages and close checklist item.
3. Start `docs/econ.html` with the same didactic structure used in Compliance and Dispatch.

## 9) Didactic Copy Review Plan

Goal: improve readability and operator decision quality without changing technical behavior.

### P1 - Highest impact pages (next session)

- `docs/index.html`
  - Clarify "Start Here" into outcome-driven flow labels (Onboarding, Operations, Support).
  - Make the main flow explicitly include Compliance -> Dispatch -> Setup -> DVIR.
- `docs/dispatch.html`
  - Tighten persona-to-action mapping with one explicit decision rule per persona.
  - Remove redundant FAQ phrasing and keep one primary "who to open first" answer.
- `docs/setup.html`
  - Add a short "minimum safe setup" sequence for first-time operators.
  - Prioritize high-risk settings (Edition, paths, policy) before optional personalization.
- `docs/troubleshooting.html`
  - Add stop/escalation conditions (when to stop retries and open support ticket).
  - Surface top 3 deterministic checks above extended troubleshooting content.

### P2 - Core operation pages

- `docs/first-run.html`
  - Add "common wrong order" warning block and expected launch sequence recap.
- `docs/home.html`
  - Expand quick decision examples (timer vs trip viability) using if/then style.
- `docs/hos.html`
  - Split dense sections into "Core" and "Advanced" guidance for easier scan.
- `docs/compliance.html`
  - Add moment-based framing (pre-trip, mid-trip, post-trip) at top of workflow.

### P3 - Deep reference pages

- `docs/dvir.html`
  - Add a short "wrong context submit" section with 2 practical mismatch examples.
- `docs/linux-setup.html`
  - Add "fast path" vs "safe path" framing to reduce onboarding friction.

### Quality rules for the copy pass

- Keep existing structure template (overview, workflow, references, checkpoint, support).
- Prefer short imperative instructions over descriptive-only paragraphs.
- Use consistent operational labels (`Drive Left`, `Shift Left`, `Cycle Left`, `DVIR Pending`, `Risk`).
- Ensure every screenshot caption explains what to validate, not only what is shown.
