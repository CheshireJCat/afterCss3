# Variable fonts

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Variable%20fonts%20CSS" caniuse="https://caniuse.com/?search=%40font-face" status="Fonts 4" label="Reference links" />

## Plain-language explanation

Use variable axes, optical sizing, and font technology declarations.

## Representative syntax

```css
font-variation-settings, font-optical-sizing, @font-face tech(variations)
```

## Demo

<CssDemo title="Variable fonts" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use variable axes, optical sizing, and font technology declarations.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 4
- Representative syntax: `font-variation-settings, font-optical-sizing, @font-face tech(variations)`
- Position in category: 1 / 18
