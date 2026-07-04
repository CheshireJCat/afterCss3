# Container size queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries" caniuse="https://caniuse.com/?search=%40container" status="Contain/Conditional 3+ / Baseline" label="Reference links" />

## Plain-language explanation

Respond to a component container size instead of the viewport.

## Representative syntax

```css
@container card (inline-size > 40rem) { ... }
```

## Demo

<CssDemo title="Container size queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Respond to a component container size instead of the viewport.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Contain/Conditional 3+ / Baseline
- Representative syntax: `@container card (inline-size &gt; 40rem) { ... }`
- Position in category: 6 / 13
