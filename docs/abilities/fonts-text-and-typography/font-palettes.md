# Font palettes

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E8%B0%83%E8%89%B2%E6%9D%BF%20CSS" caniuse="https://caniuse.com/?search=%40font-palette-values" status="Fonts 4/5" label="Reference links" />

## Plain-language explanation

Theme and customize color font palettes.

## Representative syntax

```css
font-palette, @font-palette-values
```

## Demo

<CssDemo title="Font palettes" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Theme and customize color font palettes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 4/5
- Representative syntax: `font-palette, @font-palette-values`
- Position in category: 4 / 18
