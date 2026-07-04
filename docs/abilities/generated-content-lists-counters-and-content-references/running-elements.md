# running elements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=running%20elements%20CSS" caniuse="https://caniuse.com/?search=position" status="GCPM 3" label="Reference links" />

## Plain-language explanation

Reuse document content in page headers and footers.

## Representative syntax

```css
position: running(header); content: element(header);
```

## Demo

<CssDemo title="running elements" code=".target {
  /* position: running(header); content: element(header); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Reuse document content in page headers and footers.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: GCPM 3
- Representative syntax: `position: running(header); content: element(header);`
- Position in category: 8 / 9
