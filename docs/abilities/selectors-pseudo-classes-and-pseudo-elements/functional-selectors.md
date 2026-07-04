# Functional selectors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Ais%28%29%20CSS" caniuse="https://caniuse.com/?search=%3Ais%28%29" status="Selectors 4 / Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Compose complex conditions, control specificity, and select parents or relationships.

## Representative syntax

```css
:is(), :where(), :has(), :not(.a, .b)
```

## Demo

<CssDemo title="Functional selectors" code=".stage:has(.target:hover) .target {
  border-radius: 999px;
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Compose complex conditions, control specificity, and select parents or relationships.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Selectors 4 / Snapshot pre-CR snapshot, publishable
- Representative syntax: `:is(), :where(), :has(), :not(.a, .b)`
- Position in category: 1 / 15
