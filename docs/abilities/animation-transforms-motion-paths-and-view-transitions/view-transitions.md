# View transitions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API" caniuse="https://caniuse.com/?search=view-transition-name" status="View Transitions 1/2" label="Reference links" />

## Plain-language explanation

Animate page state changes or cross-document navigation.

## Representative syntax

```css
view-transition-name: card; document.startViewTransition(...)
```

## Demo

<CssDemo title="View transitions" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Animate page state changes or cross-document navigation.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: View Transitions 1/2
- Representative syntax: `view-transition-name: card; document.startViewTransition(...)`
- Position in category: 11 / 14
