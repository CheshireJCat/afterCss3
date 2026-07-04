# wide-gamut color()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=wide-gamut%20color%28%29%20CSS" caniuse="https://caniuse.com/?search=wide-gamut%20color%28%29" status="Color 4 / Snapshot 2026 official definition" label="Reference links" />

## Plain-language explanation

Target Display-P3, Rec.2020, A98, ProPhoto, XYZ, and other wide-gamut spaces.

## Representative syntax

```css
color(display-p3 1 0.2 0), color(rec2020 ...)
```

## Demo

<CssDemo title="wide-gamut color()" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Target Display-P3, Rec.2020, A98, ProPhoto, XYZ, and other wide-gamut spaces.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 4 / Snapshot 2026 official definition
- Representative syntax: `color(display-p3 1 0.2 0), color(rec2020 ...)`
- Position in category: 4 / 15
