# Fallback and conditional value functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=first-valid%28%29%20CSS" caniuse="https://caniuse.com/?search=first-valid%28%29" status="Values 5 draft" label="Reference links" />

## Plain-language explanation

Express value-level fallbacks, state switching, progress normalization, and numeric blending.

## Representative syntax

```css
first-valid(), toggle(), progress(), calc-mix()
```

## Demo

<CssDemo title="Fallback and conditional value functions" code=".target {
  /* first-valid(), toggle(), progress(), calc-mix() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Express value-level fallbacks, state switching, progress normalization, and numeric blending.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 draft
- Representative syntax: `first-valid(), toggle(), progress(), calc-mix()`
- Position in category: 14 / 17
