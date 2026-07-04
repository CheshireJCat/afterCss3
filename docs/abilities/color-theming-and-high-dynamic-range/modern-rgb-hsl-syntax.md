# Modern rgb()/hsl() syntax

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E7%8E%B0%E4%BB%A3%20rgb%2Fhsl%20%E8%AF%AD%E6%B3%95%20CSS" caniuse="https://caniuse.com/?search=%E7%8E%B0%E4%BB%A3%20rgb%2Fhsl%20%E8%AF%AD%E6%B3%95" status="Color 4" label="Reference links" />

## Plain-language explanation

Use space-separated channels and slash alpha across modern color functions.

## Representative syntax

```css
rgb(255 0 0 / 50%), hsl(120 80% 40% / .8)
```

## Demo

<CssDemo title="Modern rgb()/hsl() syntax" code=".target {
  /* rgb(255 0 0 / 50%), hsl(120 80% 40% / .8) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use space-separated channels and slash alpha across modern color functions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Color 4
- Representative syntax: `rgb(255 0 0 / 50%), hsl(120 80% 40% / .8)`
- Position in category: 1 / 15
