# Resize Observer

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API" caniuse="https://caniuse.com/?search=Resize%20Observer" status="Snapshot rough interoperability" label="Reference links" />

## Plain-language explanation

Observe element size changes when CSS alone cannot notify JavaScript.

## Representative syntax

```css
new ResizeObserver(entries => ...)
```

## Demo

<CssDemo title="Resize Observer" code=".target {
  /* new ResizeObserver(entries =&gt; ...) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Observe element size changes when CSS alone cannot notify JavaScript.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Snapshot rough interoperability
- Representative syntax: `new ResizeObserver(entries =&gt; ...)`
- Position in category: 4 / 11
