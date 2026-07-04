# Enhanced nth-child

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Anth-child%282n%20CSS" caniuse="https://caniuse.com/?search=%3Anth-child" status="Selectors 4" label="Reference links" />

## Plain-language explanation

Calculate structural positions within a filtered subset of children.

## Representative syntax

```css
:nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))
```

## Demo

<CssDemo title="Enhanced nth-child" code=":nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Calculate structural positions within a filtered subset of children.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Selectors 4
- Representative syntax: `:nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))`
- Position in category: 3 / 15
