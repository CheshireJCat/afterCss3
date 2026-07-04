# Individual transforms

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Individual%20transforms%20CSS" caniuse="https://caniuse.com/?search=Individual%20transforms" status="Transforms 2 / pre-CR exception" label="Reference links" />

## Plain-language explanation

Animate transform components independently for more stable composition.

## Representative syntax

```css
translate, rotate, scale
```

## Demo

<CssDemo title="Individual transforms" code=".target {
  /* translate, rotate, scale */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Animate transform components independently for more stable composition.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Transforms 2 / pre-CR exception
- Representative syntax: `translate, rotate, scale`
- Position in category: 2 / 14
