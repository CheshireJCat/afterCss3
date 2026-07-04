# appearance/base appearance

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=appearance%2Fbase%20appearance%20CSS" caniuse="https://caniuse.com/?search=appearance" status="CSS UI/Forms" label="Reference links" />

## Plain-language explanation

Control native control appearance and customizable select modes.

## Representative syntax

```css
appearance: none | auto | base-select;
```

## Demo

<CssDemo title="appearance/base appearance" code=".target {
  /* appearance: none | auto | base-select; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control native control appearance and customizable select modes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: CSS UI/Forms
- Representative syntax: `appearance: none | auto | base-select;`
- Position in category: 2 / 12
