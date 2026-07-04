# Mixins / @apply

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40mixin%20CSS" caniuse="https://caniuse.com/?search=%40mixin" status="draft, very limited browser support" label="Reference links" />

## Plain-language explanation

Native reusable declaration blocks with parameters.

## Representative syntax

```css
@mixin --center { display: grid; place-items: center; } .x { @apply --center; }
```

## Demo

<CssDemo title="Mixins / @apply" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Native reusable declaration blocks with parameters.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: draft, very limited browser support
- Representative syntax: `@mixin --center { display: grid; place-items: center; } .x { @apply --center; }`
- Position in category: 11 / 12
