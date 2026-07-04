# text-wrap

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=text-wrap%20CSS" caniuse="https://caniuse.com/?search=text-wrap" status="Text 4" label="Reference links" />

## Plain-language explanation

Balance headings and improve line wrapping for body text.

## Representative syntax

```css
text-wrap: balance | pretty | stable
```

## Demo

<CssDemo title="text-wrap" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Balance headings and improve line wrapping for body text.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text 4
- Representative syntax: `text-wrap: balance | pretty | stable`
- Position in category: 7 / 18
