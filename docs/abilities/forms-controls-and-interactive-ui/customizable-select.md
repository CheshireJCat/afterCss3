# Customizable select

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select" caniuse="https://caniuse.com/?search=%3A%3Apicker" status="CSS Forms 1 / limited support" label="Reference links" />

## Plain-language explanation

Style native select buttons, pickers, options, and icons.

## Representative syntax

```css
select, ::picker(select) { appearance: base-select; }
```

## Demo

<CssDemo title="Customizable select" code=".target {
  /* select, ::picker(select) { appearance: base-select; } */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style native select buttons, pickers, options, and icons.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: CSS Forms 1 / limited support
- Representative syntax: `select, ::picker(select) { appearance: base-select; }`
- Position in category: 3 / 12
