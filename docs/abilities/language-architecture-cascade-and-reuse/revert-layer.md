# revert-layer

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer" caniuse="https://caniuse.com/?search=color" status="Cascade Level 5" label="Reference links" />

## Plain-language explanation

Roll back declarations from the current cascade layer without reverting every origin.

## Representative syntax

```css
color: revert-layer;
```

## Demo

<CssDemo title="revert-layer" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Roll back declarations from the current cascade layer without reverting every origin.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Cascade Level 5
- Representative syntax: `color: revert-layer;`
- Position in category: 4 / 12
