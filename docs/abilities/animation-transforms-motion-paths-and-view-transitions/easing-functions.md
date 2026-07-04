# Easing functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=linear%28%29%20CSS" caniuse="https://caniuse.com/?search=linear%28%29" status="Easing 1/2" label="Reference links" />

## Plain-language explanation

Use linear segments, Bezier curves, and step easing.

## Representative syntax

```css
linear(), cubic-bezier(), steps()
```

## Demo

<CssDemo title="Easing functions" code=".target {
  /* linear(), cubic-bezier(), steps() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use linear segments, Bezier curves, and step easing.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Easing 1/2
- Representative syntax: `linear(), cubic-bezier(), steps()`
- Position in category: 5 / 14
