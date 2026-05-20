# SimDuty-web - Agent Instructions

This repo is the static website for SimDuty.
It is plain HTML/CSS/JS with no build system.

## Scope
- Entry points: index.html, verify.html.
- Styles: assets/css/style.css.
- Scripts: assets/js/main.js.
- Release metadata: latest.json, releases/latest/SHA256SUMS.txt.

## Commands (Build, Lint, Test)

### Build
- No build pipeline. Files are served as-is.

### Preview (local)
- Open index.html directly in a browser, or use a static server:
  python -m http.server 8000

### Lint
- No lint tooling configured.
- Follow the existing formatting and patterns.

### Tests
- No automated tests configured.
- Manually verify in the browser (desktop + mobile widths).

### Single test
- Not applicable (no test runner configured).

## Repo Rules (Cursor/Copilot)
- No .cursor/rules, .cursorrules, or .github/copilot-instructions.md found.

## Code Style (HTML)

### Structure
- Keep semantic sections: header, hero, features, hos, gallery, download, install, footer.
- Prefer adding content inside existing containers and grids.

### Formatting
- Indent with 2 spaces.
- Keep attribute order consistent with nearby elements.
- Avoid inline styles unless already used in that block.

### i18n
- Text meant for translation should use data-i18n keys.
- Update assets/js/main.js translations for all languages (en, pt-br, es, ru).
- If you add a new key, add it to every language block.

## Code Style (CSS)

### Structure
- Variables live in :root at top of assets/css/style.css.
- Reuse existing CSS variables for colors, radius, and fonts.
- Keep sections grouped and commented like current file.

### Formatting
- Indent with 2 spaces.
- One selector per block; keep properties aligned as in file.
- Use existing animations (blink, heartbeat) when possible.

### Design language
- Dark neon palette with cyan accent (#00E5FF) and amber highlights (#FFC107).
- Use gradients and subtle glows consistent with current theme.

## Code Style (JavaScript)

### Structure
- Keep logic in assets/js/main.js.
- Use plain DOM APIs (no frameworks).

### Formatting
- Indent with 2 spaces.
- Prefer const/let; avoid var.

### i18n
- Use translations map in main.js.
- Any element with data-i18n must exist in translations.
- Preserve existing keys for backward compatibility.

## Assets and Releases

### Release metadata
- latest.json is used to populate download metadata and hash.
- SHA256SUMS.txt is expected at releases/latest/SHA256SUMS.txt.

### Images
- Images live under assets/imgs.
- Keep filenames stable to avoid breaking links in index.html.

## Accessibility
- Keep alt text for images.
- Keep aria-labels on interactive controls (carousel buttons, language selector).

## When changing code
- Prefer minimal, localized edits.
- Verify layout at 1200px, 768px, and 375px widths.
- Check translations do not overflow key UI areas.
