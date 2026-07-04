# @scope

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope" caniuse="https://caniuse.com/?search=%40scope" status="Baseline 2025" label="Reference links" />

## Plain-language explanation

Native local scoping and scoped proximity reduce global selector pollution.

## Representative syntax

```css
@scope (.card) to (.card-footer) { ... }
```

## Demo

<CssDemo title="@scope" code="@scope (.card) to (.card-footer) { ... }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Native local scoping and scoped proximity reduce global selector pollution.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Baseline 2025
- Representative syntax: `@scope (.card) to (.card-footer) { ... }`
- Position in category: 5 / 12
