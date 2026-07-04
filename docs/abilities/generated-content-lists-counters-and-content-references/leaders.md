# leaders

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=leaders%20CSS" caniuse="https://caniuse.com/?search=content" status="GCPM 3" label="Reference links" />

## Plain-language explanation

Create dotted leaders for tables of contents and page numbers.

## Representative syntax

```css
content: leader('.') target-counter(attr(href url), page);
```

## Demo

<CssDemo title="leaders" code=".target {
  /* content: leader('.') target-counter(attr(href url), page); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Create dotted leaders for tables of contents and page numbers.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: GCPM 3
- Representative syntax: `content: leader('.') target-counter(attr(href url), page);`
- Position in category: 7 / 9
