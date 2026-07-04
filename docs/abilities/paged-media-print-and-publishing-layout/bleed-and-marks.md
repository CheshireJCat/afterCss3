# Bleed and marks

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=bleed%20and%20marks%20CSS" caniuse="https://caniuse.com/?search=bleed" status="Paged Media 3" label="Reference links" />

## Plain-language explanation

Describe print bleed and crop or registration marks.

## Representative syntax

```css
bleed: 3mm; marks: crop cross;
```

## Demo

<CssDemo title="Bleed and marks" code=".target {
  /* bleed: 3mm; marks: crop cross; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Describe print bleed and crop or registration marks.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Paged Media 3
- Representative syntax: `bleed: 3mm; marks: crop cross;`
- Position in category: 5 / 9
