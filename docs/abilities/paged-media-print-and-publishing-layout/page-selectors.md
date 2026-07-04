# Page selectors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40page%20CSS" caniuse="https://caniuse.com/?search=%40page" status="Paged Media 3" label="Reference links" />

## Plain-language explanation

Control first, left, right, and blank pages separately.

## Representative syntax

```css
@page :first, @page :left, @page :right, @page :blank
```

## Demo

<CssDemo title="Page selectors" code="@page :first, @page :left, @page :right, @page :blank" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control first, left, right, and blank pages separately.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Paged Media 3
- Representative syntax: `@page :first, @page :left, @page :right, @page :blank`
- Position in category: 2 / 9
