# Display and preference queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E6%98%BE%E7%A4%BA%E4%B8%8E%E5%81%8F%E5%A5%BD%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E6%98%BE%E7%A4%BA%E4%B8%8E%E5%81%8F%E5%A5%BD%E6%9F%A5%E8%AF%A2" status="Media Queries 5 / Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Respond to system preferences and accessibility settings.

## Representative syntax

```css
prefers-color-scheme, prefers-reduced-motion, prefers-contrast, prefers-reduced-transparency, forced-colors, inverted-colors
```

## Demo

<CssDemo title="Display and preference queries" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Respond to system preferences and accessibility settings.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 5 / Snapshot pre-CR snapshot, publishable
- Representative syntax: `prefers-color-scheme, prefers-reduced-motion, prefers-contrast, prefers-reduced-transparency, forced-colors, inverted-colors`
- Position in category: 3 / 13
