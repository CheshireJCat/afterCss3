# Native scroll control pseudo-elements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Ascroll-button%28%29%20CSS" caniuse="https://caniuse.com/?search=%3A%3Ascroll-button%28%29" status="Overflow 5 draft/implementation in progress" label="Reference links" />

## Plain-language explanation

Build CSS-only carousels, pagination indicators, and scroll buttons.

## Representative syntax

```css
::scroll-button(), ::scroll-marker, ::scroll-marker-group
```

## Demo

<CssDemo title="Native scroll control pseudo-elements" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Build CSS-only carousels, pagination indicators, and scroll buttons.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Overflow 5 draft/implementation in progress
- Representative syntax: `::scroll-button(), ::scroll-marker, ::scroll-marker-group`
- Position in category: 14 / 15
