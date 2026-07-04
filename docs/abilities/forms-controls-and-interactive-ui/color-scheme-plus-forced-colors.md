# color-scheme + forced-colors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=color-scheme%20%2B%20forced-colors%20CSS" caniuse="https://caniuse.com/?search=color-scheme" status="Color Adjustment" label="Reference links" />

## Plain-language explanation

Coordinate native controls with color schemes and high-contrast modes.

## Representative syntax

```css
color-scheme: light dark; forced-color-adjust: none;
```

## Demo

<CssDemo title="color-scheme + forced-colors" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Coordinate native controls with color schemes and high-contrast modes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: Color Adjustment
- Representative syntax: `color-scheme: light dark; forced-color-adjust: none;`
- Position in category: 11 / 12
