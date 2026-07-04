# anchor-size()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=anchor-size%28%29%20CSS" caniuse="https://caniuse.com/?search=inline-size" status="Anchor Positioning" label="Reference links" />

## Plain-language explanation

Use the size of an anchored element in layout calculations.

## Representative syntax

```css
inline-size: anchor-size(width);
```

## Demo

<CssDemo title="anchor-size()" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use the size of an anchored element in layout calculations.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Anchor Positioning
- Representative syntax: `inline-size: anchor-size(width);`
- Position in category: 16 / 17
