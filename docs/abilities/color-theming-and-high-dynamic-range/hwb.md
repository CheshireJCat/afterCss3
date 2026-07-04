# HWB

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=HWB%20CSS" caniuse="https://caniuse.com/?search=HWB" status="Color 4" label="Reference links" />

## Plain-language explanation

Describe color through hue, whiteness, and blackness.

## Representative syntax

```css
hwb(200 10% 20%)
```

## Demo

<CssDemo title="HWB" code=".target {
  /* hwb(200 10% 20%) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Describe color through hue, whiteness, and blackness.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 4
- Representative syntax: `hwb(200 10% 20%)`
- Position in category: 2 / 15
