# Color and dynamic-range queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E8%89%B2%E5%BD%A9%E4%B8%8E%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E8%89%B2%E5%BD%A9%E4%B8%8E%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2" status="Media Queries 5" label="Reference links" />

## Plain-language explanation

Progressively enhance for P3, HDR, and video dynamic range.

## Representative syntax

```css
color-gamut, dynamic-range, video-dynamic-range
```

## Demo

<CssDemo title="Color and dynamic-range queries" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Progressively enhance for P3, HDR, and video dynamic range.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 5
- Representative syntax: `color-gamut, dynamic-range, video-dynamic-range`
- Position in category: 4 / 13
