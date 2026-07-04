# Container units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units" caniuse="https://caniuse.com/?search=%E5%AE%B9%E5%99%A8%E5%8D%95%E4%BD%8D" status="Contain/Values" label="Reference links" />

## Plain-language explanation

Compute values directly from the query container dimensions.

## Representative syntax

```css
cqw, cqh, cqi, cqb, cqmin, cqmax
```

## Demo

<CssDemo title="Container units" code=".target {
  /* cqw, cqh, cqi, cqb, cqmin, cqmax */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Compute values directly from the query container dimensions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Contain/Values
- Representative syntax: `cqw, cqh, cqi, cqb, cqmin, cqmax`
- Position in category: 9 / 13
