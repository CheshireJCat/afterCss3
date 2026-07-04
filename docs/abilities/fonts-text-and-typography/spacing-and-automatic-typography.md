# Spacing and automatic typography

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E9%97%B4%E8%B7%9D%E4%B8%8E%E8%87%AA%E5%8A%A8%E6%8E%92%E7%89%88%20CSS" caniuse="https://caniuse.com/?search=%E9%97%B4%E8%B7%9D%E4%B8%8E%E8%87%AA%E5%8A%A8%E6%8E%92%E7%89%88" status="Text 4/5" label="Reference links" />

## Plain-language explanation

Handle CJK punctuation, Latin/East Asian spacing, and character spacing.

## Representative syntax

```css
text-spacing-trim, text-autospace, word-space-transform
```

## Demo

<CssDemo title="Spacing and automatic typography" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Handle CJK punctuation, Latin/East Asian spacing, and character spacing.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text 4/5
- Representative syntax: `text-spacing-trim, text-autospace, word-space-transform`
- Position in category: 15 / 18
