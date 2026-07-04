# box-shadow longhands

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=box-shadow%20longhands%20CSS" caniuse="https://caniuse.com/?search=box-shadow%20longhands" status="Borders/Shadow draft" label="Reference links" />

## Plain-language explanation

Split shadows into longhands that can be animated or overridden independently.

## Representative syntax

```css
box-shadow-color, box-shadow-offset, box-shadow-blur, box-shadow-spread
```

## Demo

<CssDemo title="box-shadow longhands" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Split shadows into longhands that can be animated or overridden independently.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Borders/Shadow draft
- Representative syntax: `box-shadow-color, box-shadow-offset, box-shadow-blur, box-shadow-spread`
- Position in category: 8 / 15
