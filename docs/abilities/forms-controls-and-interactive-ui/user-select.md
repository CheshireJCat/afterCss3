# user-select

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=user-select%20CSS" caniuse="https://caniuse.com/?search=user-select" status="CSS UI" label="Reference links" />

## Plain-language explanation

Control text selection behavior.

## Representative syntax

```css
user-select: none | text | all | contain;
```

## Demo

<CssDemo title="user-select" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control text selection behavior.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: CSS UI
- Representative syntax: `user-select: none | text | all | contain;`
- Position in category: 6 / 12
