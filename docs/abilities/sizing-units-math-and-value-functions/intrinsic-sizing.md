# Intrinsic sizing

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Intrinsic%20sizing%20CSS" caniuse="https://caniuse.com/?search=fit-content%28%29" status="Snapshot pre-CR snapshot, publishable/Values" label="Reference links" />

## Plain-language explanation

Compute dimensions from natural content size and constraints.

## Representative syntax

```css
min-content, max-content, fit-content(), stretch, contain
```

## Demo

<CssDemo title="Intrinsic sizing" code=".target {
  /* min-content, max-content, fit-content(), stretch, contain */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Compute dimensions from natural content size and constraints.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Snapshot pre-CR snapshot, publishable/Values
- Representative syntax: `min-content, max-content, fit-content(), stretch, contain`
- Position in category: 1 / 17
