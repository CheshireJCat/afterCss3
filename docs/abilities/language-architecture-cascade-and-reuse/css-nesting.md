# CSS Nesting

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting" caniuse="https://caniuse.com/?search=%40media" status="Snapshot rough interoperability" label="Reference links" />

## Plain-language explanation

Native nested selectors and nested conditional rules replace part of the preprocessor workflow.

## Representative syntax

```css
.card { & h2 { ... } @media (...) { ... } }
```

## Demo

<CssDemo title="CSS Nesting" code=".card { &amp; h2 { ... } @media (...) { ... } }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Native nested selectors and nested conditional rules replace part of the preprocessor workflow.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Snapshot rough interoperability
- Representative syntax: `.card { &amp; h2 { ... } @media (...) { ... } }`
- Position in category: 6 / 12
