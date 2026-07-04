# Comparison functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=min%28%29%20CSS" caniuse="https://caniuse.com/?search=min%28%29" status="Values 4" label="Reference links" />

## Plain-language explanation

Create fluid typography, responsive sizing, and bounded values.

## Representative syntax

```css
min(), max(), clamp()
```

## Demo

<CssDemo title="Comparison functions" code=".target {
  /* min(), max(), clamp() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Create fluid typography, responsive sizing, and bounded values.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4
- Representative syntax: `min(), max(), clamp()`
- Position in category: 3 / 17
