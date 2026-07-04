# white-space decomposition

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=white-space%20%E5%88%86%E8%A7%A3%20CSS" caniuse="https://caniuse.com/?search=white-space%20%E5%88%86%E8%A7%A3" status="Text 4" label="Reference links" />

## Plain-language explanation

Control white-space collapsing and wrapping behavior independently.

## Representative syntax

```css
white-space-collapse, text-wrap-mode, text-wrap-style
```

## Demo

<CssDemo title="white-space decomposition" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control white-space collapsing and wrapping behavior independently.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text 4
- Representative syntax: `white-space-collapse, text-wrap-mode, text-wrap-style`
- Position in category: 8 / 18
