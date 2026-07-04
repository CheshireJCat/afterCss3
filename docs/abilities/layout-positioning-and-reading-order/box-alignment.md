# Box Alignment

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Box%20Alignment%20CSS" caniuse="https://caniuse.com/?search=Box%20Alignment" status="relatively stable module" label="Reference links" />

## Plain-language explanation

A unified alignment model across flex, grid, and block layout.

## Representative syntax

```css
place-items, place-content, align-self, justify-self, safe center
```

## Demo

<CssDemo title="Box Alignment" code=".target {
  /* place-items, place-content, align-self, justify-self, safe center */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: A unified alignment model across flex, grid, and block layout.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: relatively stable module
- Representative syntax: `place-items, place-content, align-self, justify-self, safe center`
- Position in category: 5 / 16
