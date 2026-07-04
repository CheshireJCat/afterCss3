# forced colors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=forced%20colors%20CSS" caniuse="https://caniuse.com/?search=forced%20colors" status="Color Adjustment 1" label="Reference links" />

## Plain-language explanation

Adapt to high-contrast and forced-colors modes.

## Representative syntax

```css
forced-color-adjust, Canvas, CanvasText
```

## Demo

<CssDemo title="forced colors" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Adapt to high-contrast and forced-colors modes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color Adjustment 1
- Representative syntax: `forced-color-adjust, Canvas, CanvasText`
- Position in category: 12 / 15
