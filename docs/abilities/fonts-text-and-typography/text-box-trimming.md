# text-box trimming

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=text-box%20trimming%20CSS" caniuse="https://caniuse.com/?search=text-box%20trimming" status="Inline 3 / Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Trim excess font-box leading for more precise vertical alignment.

## Representative syntax

```css
text-box-trim, text-box-edge, text-box
```

## Demo

<CssDemo title="text-box trimming" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Trim excess font-box leading for more precise vertical alignment.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Inline 3 / Snapshot pre-CR snapshot, publishable
- Representative syntax: `text-box-trim, text-box-edge, text-box`
- Position in category: 12 / 18
