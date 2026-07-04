# text-indent extensions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=text-indent%20%E6%89%A9%E5%B1%95%20CSS" caniuse="https://caniuse.com/?search=text-indent" status="Text 3/4 / Baseline 2026" label="Reference links" />

## Plain-language explanation

Control hanging indentation and per-line indentation.

## Representative syntax

```css
text-indent: 2em hanging each-line;
```

## Demo

<CssDemo title="text-indent extensions" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control hanging indentation and per-line indentation.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text 3/4 / Baseline 2026
- Representative syntax: `text-indent: 2em hanging each-line;`
- Position in category: 17 / 18
