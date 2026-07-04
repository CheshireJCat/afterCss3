# Container scroll-state queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40container%20CSS" caniuse="https://caniuse.com/?search=%40container" status="Conditional 5 / implementation in progress" label="Reference links" />

## Plain-language explanation

Respond to sticky, snapped, scrollable, and other scroll states.

## Representative syntax

```css
@container scroll-state(stuck: top) { ... }
```

## Demo

<CssDemo title="Container scroll-state queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Respond to sticky, snapped, scrollable, and other scroll states.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Conditional 5 / implementation in progress
- Representative syntax: `@container scroll-state(stuck: top) { ... }`
- Position in category: 8 / 13
