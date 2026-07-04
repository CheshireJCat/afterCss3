# Gradient family

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E6%B8%90%E5%8F%98%E6%97%8F%20CSS" caniuse="https://caniuse.com/?search=%E6%B8%90%E5%8F%98%E6%97%8F" status="Images 3/4, conic aspre-CR exception" label="Reference links" />

## Plain-language explanation

Create linear, radial, and conic gradients without images.

## Representative syntax

```css
linear-gradient, radial-gradient, conic-gradient, repeating-*
```

## Demo

<CssDemo title="Gradient family" code=".target {
  /* linear-gradient, radial-gradient, conic-gradient, repeating-* */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Create linear, radial, and conic gradients without images.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Images 3/4, conic aspre-CR exception
- Representative syntax: `linear-gradient, radial-gradient, conic-gradient, repeating-*`
- Position in category: 2 / 15
