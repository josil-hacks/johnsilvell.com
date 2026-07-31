# johnsilvell.com

Source code for [www.johnsilvell.com](https://www.johnsilvell.com/), a static personal website for John Silvell.

The site presents John as a DevOps Engineer in training, with additional sections for music and media production, leadership, projects, learning, and contact information.

## Current Status

The website is under active development. Some functions and information are intentionally incomplete and may change.

Current implementation highlights:

- Static one-page portfolio built with HTML, CSS, and plain JavaScript.
- Responsive Bootstrap-based layout.
- Sticky navigation with scrollspy behavior.
- Mobile navigation closes after selecting a section link.
- Footer year is updated dynamically with JavaScript.
- External source-code links show a leaving-site warning.
- A sticky development banner appears at the bottom of each page load and can be dismissed with an OK button.
- Favicons and branding assets live in `assets/branding/`.

### Last update:

The last update was the total redesign and implmentation of the new graphical profile.

## Project Structure

- `index.html` - main page markup and content.
- `style.css` - project-specific styling and graphical profile implementation.
- `script.js` - small client-side interactions.
- `assets/branding/` - favicon assets and graphical profile notes.
- `config/lint/` - lint configuration for HTML, CSS, and JavaScript.

## Libraries And External Assets

Runtime libraries are loaded directly from CDNs in `index.html`:

- Bootstrap CSS `5.3.3` via jsDelivr.
- Bootstrap JavaScript bundle `5.3.3` via jsDelivr.
- Bootstrap Icons `1.11.3` via jsDelivr.
- Google Fonts:
  - Manrope
  - Source Sans 3
  - IBM Plex Mono

Development tooling is installed through `npm`:

- `htmlhint` for HTML validation.
- `stylelint` with `stylelint-config-standard` for CSS linting.
- `eslint` with `@eslint/js` and `globals` for JavaScript linting.

## Graphical Profile

The graphical profile is documented in `assets/branding/colors.md` and implemented through CSS custom properties in `style.css`.

### Colors

- Primary: `#14243b`
- Interactive blue: `#3478f6`
- Creative violet: `#7557d5`
- Collaboration teal: `#42bfae`
- Light background: `#f6f8fb`
- Dark background: `#0d1726`
- Text: `#252c36`
- Muted text: `#667386`
- Border: `rgb(20 36 59 / 14%)`

### Typography

- Headings: `Manrope`
- Body text: `Source Sans 3`
- Monospace labels: `IBM Plex Mono`
- Editorial text: `Times New Roman`

### Shape, Spacing, And Motion

- Small radius: `8px`
- Medium radius: `10px`
- Large radius: `12px`
- Standard border width: `1px`
- Mobile section spacing: `4rem`
- Desktop section spacing: `7rem`
- Fast transition: `160ms ease`
- Standard transition: `240ms ease`
- Slow animation: `18s ease-in-out infinite`

## Development

Install dependencies:

```bash
npm install
```

Run all lint checks:

```bash
npm run lint
```

Run individual checks:

```bash
npm run lint:html
npm run lint:css
npm run lint:js
```

The site is static, so it can be opened directly in a browser or hosted by any static hosting provider.
