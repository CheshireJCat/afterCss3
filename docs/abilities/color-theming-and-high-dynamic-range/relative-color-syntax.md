# Relative color syntax

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E7%9B%B8%E5%AF%B9%E9%A2%9C%E8%89%B2%E8%AF%AD%E6%B3%95%20CSS" caniuse="https://caniuse.com/?search=%E7%9B%B8%E5%AF%B9%E9%A2%9C%E8%89%B2%E8%AF%AD%E6%B3%95" status="Color 5 / Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Extract channels from an existing color and derive new colors.

## Representative syntax

```css
oklch(from var(--brand) l c calc(h + 30))
```

## Demo

<CssDemo title="Relative color syntax" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Extract channels from an existing color and derive new colors.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 5 / Snapshot pre-CR snapshot, publishable
- Representative syntax: `oklch(from var(--brand) l c calc(h + 30))`
- Position in category: 6 / 15
