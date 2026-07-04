# 3D transforms

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=3D%20transforms%20CSS" caniuse="https://caniuse.com/?search=transform-style" status="Transforms 2" label="Reference links" />

## Plain-language explanation

Use three-dimensional transforms and perspective.

## Representative syntax

```css
transform-style: preserve-3d; perspective; rotate3d();
```

## Demo

<CssDemo title="3D transforms" code=".target {
  /* transform-style: preserve-3d; perspective; rotate3d(); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use three-dimensional transforms and perspective.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Transforms 2
- Representative syntax: `transform-style: preserve-3d; perspective; rotate3d();`
- Position in category: 3 / 14
