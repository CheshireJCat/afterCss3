# Subgrid

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid" caniuse="https://caniuse.com/?search=grid-template-columns" status="Grid Level 2" label="Reference links" />

## Plain-language explanation

Let nested grids inherit parent tracks to align deep content.

## Representative syntax

```css
grid-template-columns: subgrid;
```

## Demo

<CssDemo title="Subgrid" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Let nested grids inherit parent tracks to align deep content.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Grid Level 2
- Representative syntax: `grid-template-columns: subgrid;`
- Position in category: 2 / 16
