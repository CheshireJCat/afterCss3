# color-scheme

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=color-scheme%20CSS" caniuse="https://caniuse.com/?search=color-scheme" status="Color Adjustment 1" label="Reference links" />

## Plain-language explanation

Let browser UI, scrollbars, and form controls follow the selected theme.

## Representative syntax

```css
color-scheme: light dark;
```

## Demo

<CssDemo title="color-scheme" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Let browser UI, scrollbars, and form controls follow the selected theme.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color Adjustment 1
- Representative syntax: `color-scheme: light dark;`
- Position in category: 11 / 15
