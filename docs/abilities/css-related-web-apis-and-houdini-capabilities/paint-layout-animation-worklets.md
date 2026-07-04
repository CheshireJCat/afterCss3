# Paint/Layout/Animation Worklets

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Paint%2FLayout%2FAnimation%20Worklets%20CSS" caniuse="https://caniuse.com/?search=Paint%2FLayout%2FAnimation%20Worklets" status="Houdini, support varies significantly" label="Reference links" />

## Plain-language explanation

Extend parts of the browser rendering pipeline.

## Representative syntax

```css
paint(worklet-name), CSS.paintWorklet.addModule(...)
```

## Demo

<CssDemo title="Paint/Layout/Animation Worklets" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Extend parts of the browser rendering pipeline.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Houdini, support varies significantly
- Representative syntax: `paint(worklet-name), CSS.paintWorklet.addModule(...)`
- Position in category: 10 / 11
