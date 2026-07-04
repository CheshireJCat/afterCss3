# light-dark()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark" caniuse="https://caniuse.com/?search=color" status="Color 5" label="Reference links" />

## Plain-language explanation

Select theme-aware values in cooperation with color-scheme.

## Representative syntax

```css
color: light-dark(#111, #eee);
```

## Demo

<CssDemo title="light-dark()" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Select theme-aware values in cooperation with color-scheme.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 5
- Representative syntax: `color: light-dark(#111, #eee);`
- Position in category: 7 / 15
