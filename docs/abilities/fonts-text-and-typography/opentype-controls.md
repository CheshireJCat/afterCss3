# OpenType controls

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=OpenType%20%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=OpenType%20%E6%8E%A7%E5%88%B6" status="Fonts 3/4" label="Reference links" />

## Plain-language explanation

Control ligatures, numbers, East Asian typography, and feature switches.

## Representative syntax

```css
font-feature-settings, font-variant-*, font-kerning, font-language-override
```

## Demo

<CssDemo title="OpenType controls" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control ligatures, numbers, East Asian typography, and feature switches.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 3/4
- Representative syntax: `font-feature-settings, font-variant-*, font-kerning, font-language-override`
- Position in category: 5 / 18
