# ::marker styling

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Amarker%20styling%20CSS" caniuse="https://caniuse.com/?search=li" status="Pseudo 4 / pre-CR exception" label="Reference links" />

## Plain-language explanation

Control list marker content and styling.

## Representative syntax

```css
li::marker { color: red; content: counters(item, '.') '. '; }
```

## Demo

<CssDemo title="::marker styling" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control list marker content and styling.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: Pseudo 4 / pre-CR exception
- Representative syntax: `li::marker { color: red; content: counters(item, '.') '. '; }`
- Position in category: 3 / 9
