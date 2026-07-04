# CSSOM / Typed OM

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSSOM%20%2F%20Typed%20OM%20CSS" caniuse="https://caniuse.com/?search=CSSOM%20%2F%20Typed%20OM" status="CSSOM / Houdini" label="Reference links" />

## Plain-language explanation

Manipulate CSS values through structured APIs instead of string concatenation.

## Representative syntax

```css
element.attributeStyleMap.set('width', CSS.px(10));
```

## Demo

<CssDemo title="CSSOM / Typed OM" code=".target {
  /* element.attributeStyleMap.set('width', CSS.px(10)); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Manipulate CSS values through structured APIs instead of string concatenation.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: CSSOM / Houdini
- Representative syntax: `element.attributeStyleMap.set('width', CSS.px(10));`
- Position in category: 12 / 12
