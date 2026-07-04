# View transition states

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Aactive-view-transition%20CSS" caniuse="https://caniuse.com/?search=%3Aactive-view-transition" status="View Transitions 2 / Baseline 2026 partial" label="Reference links" />

## Plain-language explanation

Select roots or transition types during View Transition rendering.

## Representative syntax

```css
:active-view-transition, :active-view-transition-type(name)
```

## Demo

<CssDemo title="View transition states" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Select roots or transition types during View Transition rendering.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: View Transitions 2 / Baseline 2026 partial
- Representative syntax: `:active-view-transition, :active-view-transition-type(name)`
- Position in category: 10 / 15
