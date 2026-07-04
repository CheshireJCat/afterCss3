# Word breaking and hyphenation enhancements

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E6%96%AD%E8%AF%8D%E4%B8%8E%E8%BF%9E%E5%AD%97%E7%AC%A6%E5%A2%9E%E5%BC%BA%20CSS" caniuse="https://caniuse.com/?search=overflow-wrap" status="Text 3/4/5" label="Reference links" />

## Plain-language explanation

Tune word breaking, hyphenation, and language-aware line wrapping.

## Representative syntax

```css
hyphenate-character, hyphenate-limit-*, overflow-wrap:anywhere, word-break:auto-phrase
```

## Demo

<CssDemo title="Word breaking and hyphenation enhancements" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Tune word breaking, hyphenation, and language-aware line wrapping.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Text 3/4/5
- Representative syntax: `hyphenate-character, hyphenate-limit-*, overflow-wrap:anywhere, word-break:auto-phrase`
- Position in category: 9 / 18
