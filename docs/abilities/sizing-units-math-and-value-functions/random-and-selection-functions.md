# Random and selection functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=random%28%29%20CSS" caniuse="https://caniuse.com/?search=random%28%29" status="Values 5 draft" label="Reference links" />

## Plain-language explanation

Use native random values or random choices without pre-generated classes.

## Representative syntax

```css
random(), random-item()
```

## Demo

<CssDemo title="Random and selection functions" code=".target {
  /* random(), random-item() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use native random values or random choices without pre-generated classes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 draft
- Representative syntax: `random(), random-item()`
- Position in category: 13 / 17
