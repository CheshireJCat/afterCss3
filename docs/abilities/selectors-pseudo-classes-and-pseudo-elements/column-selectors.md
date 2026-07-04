# Column selectors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%88%97%E9%80%89%E6%8B%A9%E5%99%A8%20CSS" caniuse="https://caniuse.com/?search=%3Anth-col%28%29" status="Selectors 4 draft/limited support" label="Reference links" />

## Plain-language explanation

Target table column relationships and column positions.

## Representative syntax

```css
E || F, :nth-col(), :nth-last-col()
```

## Demo

<CssDemo title="Column selectors" code=".target {
  /* E || F, :nth-col(), :nth-last-col() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Target table column relationships and column positions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Selectors 4 draft/limited support
- Representative syntax: `E || F, :nth-col(), :nth-last-col()`
- Position in category: 11 / 15
