# Pointer-driven animations

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Pointer-driven%20animations%20CSS" caniuse="https://caniuse.com/?search=Pointer-driven%20animations" status="draft" label="Reference links" />

## Plain-language explanation

Drive animation from mouse or pointer position.

## Representative syntax

```css
pointer-timeline / pointer-driven concepts
```

## Demo

<CssDemo title="Pointer-driven animations" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Drive animation from mouse or pointer position.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: draft
- Representative syntax: `pointer-timeline / pointer-driven concepts`
- Position in category: 14 / 14
