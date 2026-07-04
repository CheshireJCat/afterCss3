# Media Queries 4 range syntax

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40media%20CSS" caniuse="https://caniuse.com/?search=%40media" status="candidate recommendation" label="Reference links" />

## Plain-language explanation

Write breakpoints with syntax that reads closer to mathematical expressions.

## Representative syntax

```css
@media (40rem <= width < 80rem) { ... }
```

## Demo

<CssDemo title="Media Queries 4 range syntax" code="@media (40rem &lt;= width &lt; 80rem) { ... }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Write breakpoints with syntax that reads closer to mathematical expressions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: candidate recommendation
- Representative syntax: `@media (40rem &lt;= width &lt; 80rem) { ... }`
- Position in category: 1 / 13
