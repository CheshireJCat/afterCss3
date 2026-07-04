# View Transition API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=View%20Transition%20API%20CSS" caniuse="https://caniuse.com/?search=View%20Transition%20API" status="View Transitions" label="Reference links" />

## Plain-language explanation

Work with CSS view-transition pseudo-elements from JavaScript.

## Representative syntax

```css
document.startViewTransition(callback)
```

## Demo

<CssDemo title="View Transition API" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Work with CSS view-transition pseudo-elements from JavaScript.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: View Transitions
- Representative syntax: `document.startViewTransition(callback)`
- Position in category: 11 / 11
