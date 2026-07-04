# Font loading control

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E5%8A%A0%E8%BD%BD%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E5%8A%A0%E8%BD%BD%E6%8E%A7%E5%88%B6" status="Fonts 3 / Font Loading" label="Reference links" />

## Plain-language explanation

Control web font loading timing, fallback behavior, and dynamic loading.

## Representative syntax

```css
font-display, FontFaceSet API
```

## Demo

<CssDemo title="Font loading control" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control web font loading timing, fallback behavior, and dynamic loading.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 3 / Font Loading
- Representative syntax: `font-display, FontFaceSet API`
- Position in category: 2 / 18
