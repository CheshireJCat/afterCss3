# Environment variables

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20CSS" caniuse="https://caniuse.com/?search=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" status="CSS Env 1" label="Reference links" />

## Plain-language explanation

Adapt to notches, foldable viewport segments, virtual keyboards, and title bars.

## Representative syntax

```css
env(safe-area-inset-top), env(viewport-segment-width 0 0)
```

## Demo

<CssDemo title="Environment variables" code=".target {
  /* env(safe-area-inset-top), env(viewport-segment-width 0 0) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Adapt to notches, foldable viewport segments, virtual keyboards, and title bars.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: CSS Env 1
- Representative syntax: `env(safe-area-inset-top), env(viewport-segment-width 0 0)`
- Position in category: 11 / 13
