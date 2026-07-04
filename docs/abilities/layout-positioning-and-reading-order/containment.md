# Containment

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Containment%20CSS" caniuse="https://caniuse.com/?search=contain" status="official definition + Level 2/3" label="Reference links" />

## Plain-language explanation

Isolate layout, style, and paint work to improve performance and enable container queries.

## Representative syntax

```css
contain: layout paint; content-visibility: auto; contain-intrinsic-size: 0 500px;
```

## Demo

<CssDemo title="Containment" code=".target {
  /* contain: layout paint; content-visibility: auto; contain-intrinsic-size: 0 500px; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Isolate layout, style, and paint work to improve performance and enable container queries.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: official definition + Level 2/3
- Representative syntax: `contain: layout paint; content-visibility: auto; contain-intrinsic-size: 0 500px;`
- Position in category: 10 / 16
