# Multicol and fragmentation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Multicol%20and%20fragmentation%20CSS" caniuse="https://caniuse.com/?search=Multicol%20and%20fragmentation" status="official definition/relatively stable" label="Reference links" />

## Plain-language explanation

Control multi-column layout and breaks across pages or columns.

## Representative syntax

```css
column-count, column-span, break-inside, box-decoration-break
```

## Demo

<CssDemo title="Multicol and fragmentation" code=".target {
  /* column-count, column-span, break-inside, box-decoration-break */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control multi-column layout and breaks across pages or columns.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: official definition/relatively stable
- Representative syntax: `column-count, column-span, break-inside, box-decoration-break`
- Position in category: 15 / 16
