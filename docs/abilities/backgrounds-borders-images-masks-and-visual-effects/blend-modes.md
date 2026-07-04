# blend modes

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=blend%20modes%20CSS" caniuse="https://caniuse.com/?search=blend%20modes" status="Compositing &amp; Blending" label="Reference links" />

## Plain-language explanation

Control layer compositing and blending.

## Representative syntax

```css
mix-blend-mode, background-blend-mode, isolation
```

## Demo

<CssDemo title="blend modes" code=".target {
  /* mix-blend-mode, background-blend-mode, isolation */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control layer compositing and blending.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Compositing & Blending
- Representative syntax: `mix-blend-mode, background-blend-mode, isolation`
- Position in category: 12 / 15
