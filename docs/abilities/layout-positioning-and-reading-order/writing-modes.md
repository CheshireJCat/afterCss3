# Writing modes

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Writing%20modes%20CSS" caniuse="https://caniuse.com/?search=writing-mode" status="official definition/Level 4" label="Reference links" />

## Plain-language explanation

Support vertical writing, mixed writing modes, and international typography.

## Representative syntax

```css
writing-mode: vertical-rl; text-orientation: mixed;
```

## Demo

<CssDemo title="Writing modes" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Support vertical writing, mixed writing modes, and international typography.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: official definition/Level 4
- Representative syntax: `writing-mode: vertical-rl; text-orientation: mixed;`
- Position in category: 9 / 16
