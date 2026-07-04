# Tree counting functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=sibling-index%28%29%20CSS" caniuse="https://caniuse.com/?search=sibling-index%28%29" status="Values 5 / implementation in progress" label="Reference links" />

## Plain-language explanation

Use sibling position and total counts for staggered effects, layout formulas, and color distribution.

## Representative syntax

```css
sibling-index(), sibling-count()
```

## Demo

<CssDemo title="Tree counting functions" code=".target {
  /* sibling-index(), sibling-count() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use sibling position and total counts for staggered effects, layout formulas, and color distribution.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 / implementation in progress
- Representative syntax: `sibling-index(), sibling-count()`
- Position in category: 12 / 17
