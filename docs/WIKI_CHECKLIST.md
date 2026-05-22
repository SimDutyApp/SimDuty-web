# SimDuty Wiki - Execution Checklist

Use this checklist to track documentation delivery for GitHub Pages.

## Phase 0 - Foundation

- [x] Create `docs/index.html` as the main hub
- [x] Define base docs layout (header, container, footer)
- [x] Create navigation between docs pages
- [x] Add `Documentation` link in main `index.html`
- [x] Define base visual components (`callout`, section steps, support blocks)

## Phase 1 - MVP (Published Today)

- [x] Publish `docs/first-run.html`
- [x] Publish `docs/home.html` (deferred)
- [x] Publish `docs/hos.html` (deferred)
- [x] Publish `docs/setup.html`
- [x] Publish `docs/troubleshooting.html`
- [x] Remove unfinished pages from active flow (`home` and `hos`)
- [ ] Final responsive review (1200px, 768px, 375px)

## Current Live Flow

- [x] `docs/index.html` -> `docs/first-run.html`
- [x] `docs/first-run.html` -> `docs/home.html`
- [x] `docs/home.html` -> `docs/hos.html`
- [x] `docs/hos.html` -> `docs/setup.html`
- [x] `docs/setup.html` -> `docs/dvir.html`
- [x] `docs/dvir.html` -> `docs/troubleshooting.html`
- [x] `docs/troubleshooting.html` -> `docs/index.html`

## Phase 1.1 - Deferred for Next Session

- [x] Complete `docs/home.html` content (remove TODOs, add screenshots)
- [x] Complete `docs/hos.html` content (remove TODOs, add screenshots)
- [x] Reinsert Home/HOS cards into `docs/index.html`
- [x] Reconnect page flow to include Home and HOS

## Phase 2 - Daily Operations

- [ ] Publish `docs/compliance.html`
- [ ] Publish `docs/dispatch.html`
- [x] Publish `docs/dvir.html`
- [ ] Publish `docs/econ.html`
- [ ] Verify internal links across all published pages

## Phase 2.1 - Linux and SEO

- [x] Publish `docs/linux-setup.html`
- [x] Add Linux cross-reference in `docs/first-run.html`
- [x] Add community attribution for StupidDog in Linux docs
- [x] Add structured data (HowTo/FAQPage) in `docs/dvir.html`
- [x] Add structured data (HowTo/FAQPage) in `docs/linux-setup.html`
- [x] Add structured data (HowTo + existing FAQPage) in `docs/troubleshooting.html`

## Asset Naming Migration

- [x] Rename legacy image filenames in `assets/imgs/` to professional naming
- [x] Rename legacy image filenames in `assets/imgs/docs/` to professional naming
- [x] Update all `.html` image references to new filenames

## Phase 3 - Scale

- [ ] Publish `docs/faq.html`
- [ ] Publish `docs/changelog.html`
- [ ] Implement client-side search
- [ ] Add glossary
- [ ] Add shortcuts and quick-flow page

## Content and Assets (per page)

- [ ] Page objective clearly defined
- [ ] Main step-by-step workflow documented
- [ ] FAQ with at least 3 questions
- [ ] Common errors and fixes included
- [ ] At least 1 overview screenshot
- [ ] At least 2 flow screenshots
- [ ] `alt` text and captions for all images

## Language and Quality

- [x] Docs scope set to English-only on `/docs`
- [x] Runtime i18n removed from docs pages
- [x] Technical copy consistency review (all pages)
- [ ] Manual verification on desktop and mobile
