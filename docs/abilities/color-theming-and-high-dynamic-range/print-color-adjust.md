# print-color-adjust

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=print-color-adjust%20CSS" caniuse="https://caniuse.com/?search=print-color-adjust" status="Color Adjustment 1 / Baseline 2025" label="Reference links" />

## Plain-language explanation

Control color adjustments during printing or ink-saving output.

## Representative syntax

```css
print-color-adjust: exact;
```

## Demo

<CssDemo title="print-color-adjust" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control color adjustments during printing or ink-saving output.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color Adjustment 1 / Baseline 2025
- Representative syntax: `print-color-adjust: exact;`
- Position in category: 14 / 15
