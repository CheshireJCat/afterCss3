# Font Loading API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Font%20Loading%20API%20CSS" caniuse="https://caniuse.com/?search=Font%20Loading%20API" status="Font Loading 3" label="Reference links" />

## Plain-language explanation

Control font loading and font set state from scripts.

## Representative syntax

```css
document.fonts.load(...)
```

## Demo

<CssDemo title="Font Loading API" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control font loading and font set state from scripts.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Font Loading 3
- Representative syntax: `document.fonts.load(...)`
- Position in category: 5 / 11
