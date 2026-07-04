# Text decoration enhancements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E6%96%87%E6%9C%AC%E8%A3%85%E9%A5%B0%E5%A2%9E%E5%BC%BA%20CSS" caniuse="https://caniuse.com/?search=text-underline-position" status="Text Decoration 4" label="Reference links" />

## Plain-language explanation

Control underline thickness, offset, ink skipping, and font-recommended positions.

## Representative syntax

```css
text-decoration-thickness, text-underline-offset, text-underline-position: from-font, text-decoration-skip-ink: all
```

## Demo

<CssDemo title="Text decoration enhancements" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control underline thickness, offset, ink skipping, and font-recommended positions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text Decoration 4
- Representative syntax: `text-decoration-thickness, text-underline-offset, text-underline-position: from-font, text-decoration-skip-ink: all`
- Position in category: 10 / 18
