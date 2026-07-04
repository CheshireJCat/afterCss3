# Popover and top-layer states

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Aopen%20CSS" caniuse="https://caniuse.com/?search=%3Aopen" status="Selectors 4/HTML integration" label="Reference links" />

## Plain-language explanation

Select open or top-layer states such as details, dialog, popover, and fullscreen.

## Representative syntax

```css
:open, :modal, :popover-open, :fullscreen
```

## Demo

<CssDemo title="Popover and top-layer states" code=":open, :modal, :popover-open, :fullscreen" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Select open or top-layer states such as details, dialog, popover, and fullscreen.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Selectors 4/HTML integration
- Representative syntax: `:open, :modal, :popover-open, :fullscreen`
- Position in category: 7 / 15
