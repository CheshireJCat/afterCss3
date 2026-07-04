# Container style queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries" caniuse="https://caniuse.com/?search=%40container" status="Baseline 2026" label="Reference links" />

## Plain-language explanation

Branch on computed container styles or custom properties.

## Representative syntax

```css
@container style(--theme: dark) { ... }
```

## Demo

<CssDemo title="Container style queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Branch on computed container styles or custom properties.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Baseline 2026
- Representative syntax: `@container style(--theme: dark) { ... }`
- Position in category: 7 / 13
