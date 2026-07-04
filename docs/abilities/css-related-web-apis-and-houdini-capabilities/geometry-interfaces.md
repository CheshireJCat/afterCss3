# Geometry interfaces

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Geometry%20interfaces%20CSS" caniuse="https://caniuse.com/?search=Geometry%20interfaces" status="Geometry 1" label="Reference links" />

## Plain-language explanation

Use geometric objects, matrices, and coordinate transforms.

## Representative syntax

```css
DOMPoint, DOMRect, DOMMatrix
```

## Demo

<CssDemo title="Geometry interfaces" code=".target {
  /* DOMPoint, DOMRect, DOMMatrix */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use geometric objects, matrices, and coordinate transforms.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Geometry 1
- Representative syntax: `DOMPoint, DOMRect, DOMMatrix`
- Position in category: 3 / 11
