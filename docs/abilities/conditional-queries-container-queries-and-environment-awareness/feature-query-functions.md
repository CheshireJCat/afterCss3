# Feature query functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=selector%28%29%20CSS" caniuse="https://caniuse.com/?search=selector%28%29" status="Conditional 4/5" label="Reference links" />

## Plain-language explanation

Detect selectors, declarations, font technologies, or font formats.

## Representative syntax

```css
selector(), supports(), font-tech(), font-format()
```

## Demo

<CssDemo title="Feature query functions" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Detect selectors, declarations, font technologies, or font formats.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Conditional 4/5
- Representative syntax: `selector(), supports(), font-tech(), font-format()`
- Position in category: 10 / 13
