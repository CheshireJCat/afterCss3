# Cascade layers

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer" caniuse="https://caniuse.com/?search=%40layer" status="candidate recommendation / Baseline 2022" label="Reference links" />

## Plain-language explanation

Layer browser resets, frameworks, and component styles to reduce specificity battles.

## Representative syntax

```css
@layer reset, base, components; @import url(...) layer(base);
```

## Demo

<CssDemo title="Cascade layers" code="@layer reset, base, components; @import url(...) layer(base);" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Layer browser resets, frameworks, and component styles to reduce specificity battles.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: candidate recommendation / Baseline 2022
- Representative syntax: `@layer reset, base, components; @import url(...) layer(base);`
- Position in category: 3 / 12
