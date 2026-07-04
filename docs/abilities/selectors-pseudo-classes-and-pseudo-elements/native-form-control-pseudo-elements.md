# Native form control pseudo-elements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Apicker%28%29%20CSS" caniuse="https://caniuse.com/?search=%3A%3Apicker%28%29" status="CSS Forms 1 draft" label="Reference links" />

## Plain-language explanation

Style select, checkbox, range, date/time, and other native control internals more precisely.

## Representative syntax

```css
::picker(), ::picker-icon, ::checkmark, ::thumb, ::track, ::fill, ::field-text, ::field-component, ::field-separator
```

## Demo

<CssDemo title="Native form control pseudo-elements" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style select, checkbox, range, date/time, and other native control internals more precisely.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: CSS Forms 1 draft
- Representative syntax: `::picker(), ::picker-icon, ::checkmark, ::thumb, ::track, ::fill, ::field-text, ::field-component, ::field-separator`
- Position in category: 15 / 15
