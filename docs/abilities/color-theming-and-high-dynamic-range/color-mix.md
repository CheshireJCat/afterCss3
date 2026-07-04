# color-mix()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix" caniuse="https://caniuse.com/?search=color-mix%28%29" status="Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Mix colors in a chosen color space.

## Representative syntax

```css
color-mix(in oklch, var(--brand) 70%, white)
```

## Demo

<CssDemo title="color-mix()" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Mix colors in a chosen color space.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Snapshot pre-CR snapshot, publishable
- Representative syntax: `color-mix(in oklch, var(--brand) 70%, white)`
- Position in category: 5 / 15
