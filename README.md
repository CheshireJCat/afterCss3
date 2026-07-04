# After CSS3

[![Deploy VitePress site to Pages](https://github.com/CheshireJCat/afterCss3/actions/workflows/deploy.yml/badge.svg)](https://github.com/CheshireJCat/afterCss3/actions/workflows/deploy.yml)
[![VitePress](https://img.shields.io/badge/built%20with-VitePress-646CFF.svg)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

After CSS3 is a curated navigation site for modern CSS capabilities after the CSS3 era. It organizes new CSS features by capability area and gives each feature a short explanation, MDN entry, live-readable demo, and a Can I Use compatibility link.

CSS no longer evolves as a single "CSS4" release. It evolves through independent modules such as Selectors, Cascade, Color, Values and Units, Containment, Anchor Positioning, View Transitions, and many others. This project turns that scattered evolution into a browsable knowledge base.

Live site: [cheshirejcat.github.io/afterCss3](https://cheshirejcat.github.io/afterCss3/)

## What Is Included

- 14 categorized capability areas, covering language architecture, selectors, queries, layout, values, color, typography, visual effects, scrolling, animation, forms, generated content, paged media, and CSS-related APIs.
- 186 feature pages generated from structured data.
- A consistent page format for every feature: plain-language explanation, representative syntax, demo, MDN link, Can I Use link, maturity/status notes, and usage guidance.
- A VitePress-based documentation site with local search, GitHub Pages deployment, and generated sidebar navigation.

## Use Cases

- Quickly answer "what modern CSS feature should I use for this problem?"
- Review CSS capabilities added after the CSS3 branding era.
- Compare feature maturity before introducing a new CSS capability into production.
- Use the structured data as a source for learning material, internal docs, or browser-support checklists.

## Quick Start

```bash
npm install
npm run docs:dev
```

The development server runs the generator first, then starts VitePress.

## Available Scripts

```bash
npm run docs:generate
npm run docs:dev
npm run docs:build
npm run docs:preview
```

- `docs:generate`: reads `data/abilities.json` and regenerates feature pages plus sidebar data.
- `docs:dev`: regenerates docs and starts the VitePress dev server.
- `docs:build`: regenerates docs and builds the static site.
- `docs:preview`: previews the built site locally.

## Project Structure

```text
.
|-- data/
|   `-- abilities.json          # Structured source of CSS capability data
|-- docs/
|   |-- .vitepress/             # VitePress config, theme, generated sidebar
|   |-- abilities/              # Generated category and feature pages
|   `-- index.md                # Generated homepage
|-- scripts/
|   `-- generate-docs.mjs       # Data-to-Markdown generator
`-- .github/workflows/
    `-- deploy.yml              # GitHub Pages deployment workflow
```

## Content Model

The source of truth is `data/abilities.json`. Each category contains a list of CSS capability items with fields such as:

- `name`: display name.
- `slug`: URL-safe page slug.
- `syntax`: representative CSS syntax.
- `summary`: short plain-language explanation.
- `status`: maturity or specification status.
- `mdn`: MDN reference or search entry.
- `caniuse`: Can I Use compatibility entry or search URL.
- `demo`: CSS snippet used by the demo component.

After editing the data, regenerate the site:

```bash
npm run docs:generate
```

## Deployment

The site is deployed to GitHub Pages through GitHub Actions. The workflow builds VitePress and uploads `docs/.vitepress/dist` as the Pages artifact.

Repository Pages settings should use:

- Source: GitHub Actions
- Base path: `/afterCss3/`

The VitePress `base` is configured for the repository Pages URL by default.

## Contributing

Contributions are welcome. Useful improvements include:

- Adding missing CSS capabilities.
- Improving summaries, examples, and maturity notes.
- Replacing broad MDN or Can I Use search links with more precise entries.
- Improving demos while keeping them small and readable.
- Fixing category placement or terminology.

Before submitting a change, run:

```bash
npm run docs:build
```

## Content Guidelines

- Keep explanations short and practical.
- Prefer official references such as MDN, W3C drafts, CSSWG drafts, and browser vendor documentation.
- Treat browser support as time-sensitive; link to Can I Use or MDN compatibility data instead of copying static tables.
- Mark experimental or draft features clearly.
- Avoid presenting "CSS4" as a formal release name.

## License

MIT
