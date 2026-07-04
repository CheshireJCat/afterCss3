# @starting-style

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style" caniuse="https://caniuse.com/?search=%40starting-style" status="Transitions 2 / Baseline" label="Reference links" />

## Plain-language explanation

Define starting styles for elements entering the DOM or appearing from display:none.

## Representative syntax

```css
@starting-style { opacity: 0; }
```

## Demo

<CssDemo title="@starting-style" code="@starting-style { opacity: 0; }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Define starting styles for elements entering the DOM or appearing from display:none.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Transitions 2 / Baseline
- Representative syntax: `@starting-style { opacity: 0; }`
- Position in category: 7 / 14
