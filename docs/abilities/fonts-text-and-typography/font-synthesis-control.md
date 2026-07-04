# Font synthesis control

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E5%90%88%E6%88%90%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E5%90%88%E6%88%90%E6%8E%A7%E5%88%B6" status="Fonts 4" label="Reference links" />

## Plain-language explanation

Control whether browsers synthesize bold, italic, small caps, and similar faces.

## Representative syntax

```css
font-synthesis, font-synthesis-weight/style/small-caps/position
```

## Demo

<CssDemo title="Font synthesis control" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control whether browsers synthesize bold, italic, small caps, and similar faces.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 4
- Representative syntax: `font-synthesis, font-synthesis-weight/style/small-caps/position`
- Position in category: 6 / 18
