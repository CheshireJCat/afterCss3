# color-contrast()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=color-contrast%28%29%20CSS" caniuse="https://caniuse.com/?search=color-contrast%28%29" status="Color 5/6 evolving" label="Reference links" />

## Plain-language explanation

Select a color from candidates that satisfies a contrast target.

## Representative syntax

```css
color-contrast(var(--bg) vs white, black);
```

## Demo

<CssDemo title="color-contrast()" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Select a color from candidates that satisfies a contrast target.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 5/6 evolving
- Representative syntax: `color-contrast(var(--bg) vs white, black);`
- Position in category: 9 / 15
