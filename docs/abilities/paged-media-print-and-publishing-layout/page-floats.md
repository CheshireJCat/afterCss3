# Page floats

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=page%20floats%20CSS" caniuse="https://caniuse.com/?search=page%20floats" status="Page Floats 3 draft" label="Reference links" />

## Plain-language explanation

Place figures and tables as deferred floats in publications.

## Representative syntax

```css
float-reference, float-defer, float-offset
```

## Demo

<CssDemo title="Page floats" code=".target {
  /* float-reference, float-defer, float-offset */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Place figures and tables as deferred floats in publications.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Page Floats 3 draft
- Representative syntax: `float-reference, float-defer, float-offset`
- Position in category: 7 / 9
