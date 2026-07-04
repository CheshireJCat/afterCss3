# calc-size()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=calc-size%28%29%20CSS" caniuse="https://caniuse.com/?search=height" status="Values 5" label="Reference links" />

## Plain-language explanation

Perform calculations on intrinsic sizes and use them in animation.

## Representative syntax

```css
height: calc-size(auto, size + 2rem);
```

## Demo

<CssDemo title="calc-size()" code=".target {
  /* height: calc-size(auto, size + 2rem); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Perform calculations on intrinsic sizes and use them in animation.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5
- Representative syntax: `height: calc-size(auto, size + 2rem);`
- Position in category: 10 / 17
