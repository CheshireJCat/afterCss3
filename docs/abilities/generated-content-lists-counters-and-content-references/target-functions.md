# target-* functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=target-counter%28%29%20CSS" caniuse="https://caniuse.com/?search=target-counter%28%29" status="GCPM 3" label="Reference links" />

## Plain-language explanation

Reference target page numbers, counters, and text for publishing workflows.

## Representative syntax

```css
target-counter(), target-counters(), target-text()
```

## Demo

<CssDemo title="target-* functions" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Reference target page numbers, counters, and text for publishing workflows.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: GCPM 3
- Representative syntax: `target-counter(), target-counters(), target-text()`
- Position in category: 6 / 9
