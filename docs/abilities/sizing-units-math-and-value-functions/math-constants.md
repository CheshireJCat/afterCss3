# Math constants

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E6%95%B0%E5%AD%A6%E5%B8%B8%E9%87%8F%20CSS" caniuse="https://caniuse.com/?search=%E6%95%B0%E5%AD%A6%E5%B8%B8%E9%87%8F" status="Values 4" label="Reference links" />

## Plain-language explanation

Use standard math constants inside calc expressions.

## Representative syntax

```css
pi, e, infinity, -infinity, NaN
```

## Demo

<CssDemo title="Math constants" code=".target {
  /* pi, e, infinity, -infinity, NaN */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use standard math constants inside calc expressions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4
- Representative syntax: `pi, e, infinity, -infinity, NaN`
- Position in category: 5 / 17
