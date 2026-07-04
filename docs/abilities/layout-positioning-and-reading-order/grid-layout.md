# Grid layout

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" caniuse="https://caniuse.com/?search=display" status="candidate recommendation" label="Reference links" />

## Plain-language explanation

Two-dimensional layout with named areas and automatic placement.

## Representative syntax

```css
display: grid; grid-template-columns: repeat(auto-fit, minmax(...));
```

## Demo

<CssDemo title="Grid layout" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Two-dimensional layout with named areas and automatic placement.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: candidate recommendation
- Representative syntax: `display: grid; grid-template-columns: repeat(auto-fit, minmax(...));`
- Position in category: 1 / 16
