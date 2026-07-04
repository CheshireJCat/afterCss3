# Discrete transitions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Discrete%20transitions%20CSS" caniuse="https://caniuse.com/?search=transition-behavior" status="Transitions 2" label="Reference links" />

## Plain-language explanation

Transition discrete values such as display and overlay.

## Representative syntax

```css
transition-behavior: allow-discrete;
```

## Demo

<CssDemo title="Discrete transitions" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Transition discrete values such as display and overlay.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Transitions 2
- Representative syntax: `transition-behavior: allow-discrete;`
- Position in category: 6 / 14
