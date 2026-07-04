# animation-range

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=animation-range%20CSS" caniuse="https://caniuse.com/?search=animation-range" status="Scroll Animations 1" label="Reference links" />

## Plain-language explanation

Limit the active range of a scroll or view timeline.

## Representative syntax

```css
animation-range: entry 0% cover 50%;
```

## Demo

<CssDemo title="animation-range" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Limit the active range of a scroll or view timeline.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Scroll Animations 1
- Representative syntax: `animation-range: entry 0% cover 50%;`
- Position in category: 10 / 14
