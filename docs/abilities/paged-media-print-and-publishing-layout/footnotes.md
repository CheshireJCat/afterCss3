# Footnotes

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=footnotes%20CSS" caniuse="https://caniuse.com/?search=float" status="GCPM 3" label="Reference links" />

## Plain-language explanation

Control footnote areas, numbering, and rules.

## Representative syntax

```css
float: footnote; @footnote { ... }
```

## Demo

<CssDemo title="Footnotes" code=".target {
  /* float: footnote; @footnote { ... } */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control footnote areas, numbering, and rules.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: GCPM 3
- Representative syntax: `float: footnote; @footnote { ... }`
- Position in category: 8 / 9
