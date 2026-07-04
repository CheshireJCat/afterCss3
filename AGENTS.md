# AGENTS.md

Guidance for future agents working on After CSS3.

## Project Purpose

After CSS3 is a VitePress documentation site for modern CSS capabilities after the CSS3 branding era. It is not a generic blog and should not describe "CSS4" as a formal release. Treat the project as a practical reference site: each feature should help a reader understand what the capability is, when to use it, where to read MDN, and where to verify browser support.

The default language is English. Simplified Chinese is available under `/zh/`.

## Source of Truth

- `data/abilities.json` is the structured capability catalog.
- `scripts/i18n.mjs` contains UI copy, category translations, feature translations, syntax overrides, and summary translations.
- `scripts/content-enhancements.mjs` contains practical "When to use it" guidance and demo scenes.
- `scripts/generate-docs.mjs` turns the structured data and enhancements into Markdown pages.
- `docs/.vitepress/config.mts` is the VitePress configuration.
- `docs/.vitepress/theme/` contains custom components and site styling.

Generated documentation pages are committed:

- `docs/index.md`
- `docs/abilities/**`
- `docs/zh/**`
- `docs/.vitepress/sidebar.generated.ts`

Do not manually maintain generated Markdown as the only change. If a generated page needs to change, update the source data or generation scripts, then run the generator.

Ignored build output:

- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`

Do not commit build artifacts from those directories.

## Commands

Use npm for this project.

```bash
npm install
npm run docs:generate
npm run docs:dev
npm run docs:build
npm run docs:preview
```

Before finishing a code or content change, run:

```bash
npm run docs:build
git diff --check
```

For content-only source changes that affect generated pages, also run:

```bash
npm run docs:generate
```

and include the generated Markdown/sidebar changes in the diff.

## I18n Rules

- English is the default site and README language.
- Keep `README.md` and `README.zh-CN.md` aligned when project behavior, commands, structure, or deployment details change.
- Keep English and Simplified Chinese generated pages structurally equivalent.
- When adding or renaming a capability, update both the English/default content and the Chinese translation path.
- Use VitePress locale support for language switching. Do not add extra hand-written English/Chinese links in the navbar or homepage action buttons; keep the single `VPNavBarTranslations` entry as the language switch.

## Content Quality

Each feature page should remain useful as a reference, not just a syntax card. For every capability:

- The explanation should be short, specific, and plain-language.
- "When to use it" should describe real usage scenarios, concrete examples, and practical caveats.
- Avoid repeated boilerplate warnings across unrelated features.
- Prefer official or stable references: MDN, CSSWG/W3C drafts, and browser vendor docs.
- Browser compatibility changes over time. Link to Can I Use or MDN compatibility data instead of copying static support tables.
- Mark experimental, draft, or limited-support features clearly without overstating production readiness.

## Demo Rules

Demos should make the CSS effect visible and credible.

- Prefer feature-specific HTML and CSS over generic two-`div` examples.
- Show the behavior a developer would actually care about.
- Keep demos small enough to read, but complete enough to demonstrate the feature.
- Put reusable demo logic in `scripts/content-enhancements.mjs` and rendering behavior in `docs/.vitepress/theme/components/CssDemo.vue`.
- Keep demo code display readable: no horizontal layout breakage, no raw overflowing blocks, and preserve syntax highlighting.
- If a feature is not widely supported, present the syntax and progressive-enhancement idea honestly.

## Design And UI Rules

- Match the existing VitePress theme and custom visual vocabulary.
- Use the existing color tokens in `docs/.vitepress/theme/custom.css`.
- Keep documentation pages dense, scannable, and reference-oriented.
- Do not turn docs pages into marketing landing pages.
- Avoid decorative UI that distracts from reading or feature comparison.
- Check mobile layouts when changing nav, homepage, demo, or code-block styling.

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy.yml` on pushes to `main`.

The workflow runs:

```bash
npm ci
npm run docs:build
```

The VitePress base path is `/afterCss3/`. English is served at `/afterCss3/`; Simplified Chinese is served at `/afterCss3/zh/`.

After pushing deployment-related changes, verify the GitHub Actions run and, when appropriate, check:

```bash
curl -I https://cheshirejcat.github.io/afterCss3/
curl -I https://cheshirejcat.github.io/afterCss3/zh/
```

## Git Hygiene

- Keep changes scoped to the user's request.
- Do not revert unrelated user changes.
- Check `git status --short` before and after edits.
- Prefer small, descriptive commits when the user asks for a commit or when the change is clearly being shipped.
- Do not change package managers or add dependencies unless there is a clear project need.

