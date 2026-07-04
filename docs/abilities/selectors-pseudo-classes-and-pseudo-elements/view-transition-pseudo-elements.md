# View Transition pseudo-elements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Aview-transition%20CSS" caniuse="https://caniuse.com/?search=%3A%3Aview-transition" status="View Transitions 1/2" label="Reference links" />

## Plain-language explanation

Define captured layers and animations for page state changes.

## Representative syntax

```css
::view-transition, ::view-transition-group(), ::view-transition-image-pair(), ::view-transition-old(), ::view-transition-new()
```

## Demo

<CssDemo title="View Transition pseudo-elements" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Define captured layers and animations for page state changes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: View Transitions 1/2
- Representative syntax: `::view-transition, ::view-transition-group(), ::view-transition-image-pair(), ::view-transition-old(), ::view-transition-new()`
- Position in category: 13 / 15
