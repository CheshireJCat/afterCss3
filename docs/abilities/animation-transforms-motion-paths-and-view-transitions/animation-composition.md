# animation-composition

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=animation-composition%20CSS" caniuse="https://caniuse.com/?search=animation-composition" status="Animations 2" label="Reference links" />

## Plain-language explanation

Control how multiple animations compose with one another.

## Representative syntax

```css
animation-composition: add | accumulate | replace;
```

## Demo

<CssDemo title="animation-composition" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control how multiple animations compose with one another.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Animations 2
- Representative syntax: `animation-composition: add | accumulate | replace;`
- Position in category: 8 / 14
