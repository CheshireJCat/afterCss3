# masking

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=masking%20CSS" caniuse="https://caniuse.com/?search=masking" status="Masking 1" label="Reference links" />

## Plain-language explanation

Use alpha and luminance masks, clipping paths, and complex shapes.

## Representative syntax

```css
mask-image, mask-mode, mask-composite, clip-path
```

## Demo

<CssDemo title="masking" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use alpha and luminance masks, clipping paths, and complex shapes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Masking 1
- Representative syntax: `mask-image, mask-mode, mask-composite, clip-path`
- Position in category: 9 / 15
