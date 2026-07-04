# Overflow clip

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Overflow%20clip%20CSS" caniuse="https://caniuse.com/?search=overflow" status="Overflow 3/4" label="Reference links" />

## Plain-language explanation

Clip overflow without creating a scroll container.

## Representative syntax

```css
overflow: clip; overflow-clip-margin: 1rem;
```

## Demo

<CssDemo title="Overflow clip" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Clip overflow without creating a scroll container.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Overflow 3/4
- Representative syntax: `overflow: clip; overflow-clip-margin: 1rem;`
- Position in category: 6 / 10
