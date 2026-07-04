# contrast-color()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/contrast-color" caniuse="https://caniuse.com/?search=color" status="Color 6 / Baseline 2026" label="Reference links" />

## Plain-language explanation

Choose a readable foreground color based on a background.

## Representative syntax

```css
color: contrast-color(var(--bg));
```

## Demo

<CssDemo title="contrast-color()" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Choose a readable foreground color based on a background.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 6 / Baseline 2026
- Representative syntax: `color: contrast-color(var(--bg));`
- Position in category: 8 / 15
