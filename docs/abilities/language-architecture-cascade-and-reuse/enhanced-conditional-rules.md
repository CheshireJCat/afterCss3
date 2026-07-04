# Enhanced conditional rules

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40supports%20CSS" caniuse="https://caniuse.com/?search=%40supports" status="Conditional 3/4/5" label="Reference links" />

## Plain-language explanation

Detect support for properties, values, selectors, font technologies, and font formats.

## Representative syntax

```css
@supports selector(:has(*)) { ... }
```

## Demo

<CssDemo title="Enhanced conditional rules" code=".stage:has(.target:hover) .target {
  border-radius: 999px;
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Detect support for properties, values, selectors, font technologies, and font formats.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Conditional 3/4/5
- Representative syntax: `@supports selector(:has(*)) { ... }`
- Position in category: 7 / 12
