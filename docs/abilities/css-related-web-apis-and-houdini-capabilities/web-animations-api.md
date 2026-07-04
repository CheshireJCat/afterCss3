# Web Animations API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Web%20Animations%20API%20CSS" caniuse="https://caniuse.com/?search=Web%20Animations%20API" status="Web Animations 1/2" label="Reference links" />

## Plain-language explanation

Use a JavaScript API that shares timing and effects with the CSS animation model.

## Representative syntax

```css
element.animate(...)
```

## Demo

<CssDemo title="Web Animations API" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use a JavaScript API that shares timing and effects with the CSS animation model.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Web Animations 1/2
- Representative syntax: `element.animate(...)`
- Position in category: 6 / 11
