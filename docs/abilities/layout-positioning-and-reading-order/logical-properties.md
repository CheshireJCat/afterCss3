# Logical properties

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Logical%20properties%20CSS" caniuse="https://caniuse.com/?search=Logical%20properties" status="Snapshot rough interoperability" label="Reference links" />

## Plain-language explanation

Map layout, margin, border, and sizing properties to writing direction.

## Representative syntax

```css
margin-inline, padding-block, inset-inline-start, border-start-start-radius
```

## Demo

<CssDemo title="Logical properties" code=".target {
  /* margin-inline, padding-block, inset-inline-start, border-start-start-radius */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Map layout, margin, border, and sizing properties to writing direction.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Snapshot rough interoperability
- Representative syntax: `margin-inline, padding-block, inset-inline-start, border-start-start-radius`
- Position in category: 8 / 16
