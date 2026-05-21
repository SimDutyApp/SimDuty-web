# SimDuty Wiki - Implementation Roadmap

This roadmap defines the structure, priorities, and quality bar for the SimDuty Wiki hosted in GitHub Pages under `/docs`.

## 1) Current Information Architecture (Published Today)

```text
docs/
  index.html                 -> Wiki hub (published)
  first-run.html             -> First run onboarding (published)
  setup.html                 -> Setup tab guide (published)
  troubleshooting.html       -> Common issues and fixes (published)
  home.html                  -> Home tab reference (implemented, deferred)
  hos.html                   -> HOS tab reference (implemented, deferred)
  compliance.html            -> Compliance tab reference (planned)
  dispatch.html              -> Dispatch tab reference (planned)
  dvir.html                  -> DVIR tab reference (planned)
  econ.html                  -> Economy tab reference (planned)
  faq.html                   -> Global FAQ (planned)
  changelog.html             -> Release notes for docs users (planned)
```

Current live flow:

`index.html -> first-run.html -> home.html -> hos.html -> setup.html -> troubleshooting.html -> index.html`

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

### Phase 2 - Daily Operations Coverage (Planned)

- `docs/compliance.html`
- `docs/dispatch.html`
- `docs/dvir.html`
- `docs/econ.html`

Deliverable: complete operational documentation for recurring usage.

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

Current real files already used:

- `assets/imgs/docs/img1_instalacao.png`
- `assets/imgs/docs/img2_instalacao.png`
- `assets/imgs/docs/img3_instalacao.png`
- `assets/imgs/docs/img1_setup.png`
- `assets/imgs/docs/img1_tablet.png`
- `assets/imgs/docs/img2_mobile.png`

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

1. Start `docs/compliance.html` and `docs/dispatch.html` using the same template system.
2. Validate full responsive pass at 1200px, 768px, and 375px for all published pages.
3. Expand support-oriented examples in `docs/troubleshooting.html` for HOS/Home cross-flow issues.
