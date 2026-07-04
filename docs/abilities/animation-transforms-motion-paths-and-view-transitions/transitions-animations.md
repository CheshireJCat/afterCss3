# Transitions / Animations

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Transitions%20%2F%20Animations%20CSS" caniuse="https://caniuse.com/?search=%40keyframes" status="Snapshot rough interoperability/publishable" label="Reference links" />

## Plain-language explanation

Change CSS properties over time.

## Representative syntax

```css
transition, @keyframes, animation-*
```

## Demo

<CssDemo title="Transitions / Animations" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Change CSS properties over time.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Snapshot rough interoperability/publishable
- Representative syntax: `transition, @keyframes, animation-*`
- Position in category: 1 / 14
