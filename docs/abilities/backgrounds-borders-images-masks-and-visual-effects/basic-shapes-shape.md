# basic shapes / shape()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=basic%20shapes%20%2F%20shape%28%29%20CSS" caniuse="https://caniuse.com/?search=clip-path" status="Shapes/Values / Baseline 2026" label="Reference links" />

## Plain-language explanation

Use native parameterized shape functions in CSS.

## Representative syntax

```css
clip-path: shape(...); offset-path: shape(...)
```

## Demo

<CssDemo title="basic shapes / shape()" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use native parameterized shape functions in CSS.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Shapes/Values / Baseline 2026
- Representative syntax: `clip-path: shape(...); offset-path: shape(...)`
- Position in category: 10 / 15
