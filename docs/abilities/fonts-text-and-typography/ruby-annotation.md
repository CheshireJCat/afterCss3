# Ruby annotation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Ruby%20annotation%20CSS" caniuse="https://caniuse.com/?search=Ruby%20annotation" status="Ruby 1" label="Reference links" />

## Plain-language explanation

Lay out Japanese, Chinese pinyin, zhuyin, and side annotations.

## Representative syntax

```css
ruby-position, ruby-align, ruby-merge
```

## Demo

<CssDemo title="Ruby annotation" code=".target {
  /* ruby-position, ruby-align, ruby-merge */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Lay out Japanese, Chinese pinyin, zhuyin, and side annotations.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Ruby 1
- Representative syntax: `ruby-position, ruby-align, ruby-merge`
- Position in category: 16 / 18
