# HDR color

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=HDR%20color%20CSS" caniuse="https://caniuse.com/?search=HDR%20color" status="Color HDR 1 draft" label="Reference links" />

## Plain-language explanation

Control color output for high dynamic range displays.

## Representative syntax

```css
dynamic-range-limit, HDR color spaces
```

## Demo

<CssDemo title="HDR color" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control color output for high dynamic range displays.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color HDR 1 draft
- Representative syntax: `dynamic-range-limit, HDR color spaces`
- Position in category: 15 / 15
