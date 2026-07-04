# highlight pseudos

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Aselection%20CSS" caniuse="https://caniuse.com/?search=%3A%3Aselection" status="Pseudo/Highlight" label="Reference links" />

## Plain-language explanation

Style selections, text fragments, and custom range highlights.

## Representative syntax

```css
::selection, ::target-text, ::highlight(custom)
```

## Demo

<CssDemo title="highlight pseudos" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style selections, text fragments, and custom range highlights.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: Pseudo/Highlight
- Representative syntax: `::selection, ::target-text, ::highlight(custom)`
- Position in category: 10 / 12
