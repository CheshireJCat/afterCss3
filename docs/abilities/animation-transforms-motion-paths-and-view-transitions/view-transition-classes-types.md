# View transition classes/types

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=View%20transition%20classes%2Ftypes%20CSS" caniuse="https://caniuse.com/?search=%40view-transition" status="View Transitions 2 / Baseline 2025" label="Reference links" />

## Plain-language explanation

Reuse transition styles and declare cross-page transition types.

## Representative syntax

```css
view-transition-class, @view-transition { navigation: auto; }
```

## Demo

<CssDemo title="View transition classes/types" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Reuse transition styles and declare cross-page transition types.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: View Transitions 2 / Baseline 2025
- Representative syntax: `view-transition-class, @view-transition { navigation: auto; }`
- Position in category: 12 / 14
