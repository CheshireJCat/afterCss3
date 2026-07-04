# CSS Image Animation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSS%20Image%20Animation%20CSS" caniuse="https://caniuse.com/?search=CSS%20Image%20Animation" status="Image Animation 1 draft" label="Reference links" />

## Plain-language explanation

Control animated image playback, first frames, and related behavior.

## Representative syntax

```css
image animation controls
```

## Demo

<CssDemo title="CSS Image Animation" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control animated image playback, first frames, and related behavior.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Image Animation 1 draft
- Representative syntax: `image animation controls`
- Position in category: 14 / 15
