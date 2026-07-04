# Shapes and exclusions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Shapes%20and%20exclusions%20CSS" caniuse="https://caniuse.com/?search=shape-outside" status="Shapes 1/2、Exclusions draft" label="Reference links" />

## Plain-language explanation

Wrap text around non-rectangular shapes and complex float regions.

## Representative syntax

```css
shape-outside: circle(); shape-margin: 1rem;
```

## Demo

<CssDemo title="Shapes and exclusions" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Wrap text around non-rectangular shapes and complex float regions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Shapes 1/2、Exclusions draft
- Representative syntax: `shape-outside: circle(); shape-margin: 1rem;`
- Position in category: 14 / 16
