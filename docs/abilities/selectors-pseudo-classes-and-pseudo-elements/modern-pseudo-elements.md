# Modern pseudo-elements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Amarker%20CSS" caniuse="https://caniuse.com/?search=%3A%3Amarker" status="Pseudo 4 / Forms / Highlight" label="Reference links" />

## Plain-language explanation

Style list markers, placeholders, file buttons, selections, highlights, and top-layer backdrops.

## Representative syntax

```css
::marker, ::placeholder, ::file-selector-button, ::selection, ::target-text, ::highlight(name), ::backdrop, ::details-content
```

## Demo

<CssDemo title="Modern pseudo-elements" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style list markers, placeholders, file buttons, selections, highlights, and top-layer backdrops.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Pseudo 4 / Forms / Highlight
- Representative syntax: `::marker, ::placeholder, ::file-selector-button, ::selection, ::target-text, ::highlight(name), ::backdrop, ::details-content`
- Position in category: 12 / 15
