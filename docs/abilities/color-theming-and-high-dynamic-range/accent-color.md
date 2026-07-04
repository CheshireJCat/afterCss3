# accent-color

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color" caniuse="https://caniuse.com/?search=accent-color" status="CSS UI 4 / Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Set the accent color for native checkbox, radio, range, and progress controls.

## Representative syntax

```css
accent-color: var(--brand);
```

## Demo

<CssDemo title="accent-color" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Set the accent color for native checkbox, radio, range, and progress controls.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: CSS UI 4 / Snapshot pre-CR snapshot, publishable
- Representative syntax: `accent-color: var(--brand);`
- Position in category: 13 / 15
