# Custom properties

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" caniuse="https://caniuse.com/?search=--brand" status="official definition" label="Reference links" />

## Plain-language explanation

Native variables, design tokens, and cross-component inheritance.

## Representative syntax

```css
--brand: oklch(...); color: var(--brand);
```

## Demo

<CssDemo title="Custom properties" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Native variables, design tokens, and cross-component inheritance.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: official definition
- Representative syntax: `--brand: oklch(...); color: var(--brand);`
- Position in category: 1 / 12
