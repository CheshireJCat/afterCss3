# image-rendering

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=image-rendering%20CSS" caniuse="https://caniuse.com/?search=image-rendering" status="Images / Baseline 2026 partial" label="Reference links" />

## Plain-language explanation

Choose scaling strategies for pixel art and low-resolution assets.

## Representative syntax

```css
image-rendering: crisp-edges | pixelated;
```

## Demo

<CssDemo title="image-rendering" code=".target {
  /* image-rendering: crisp-edges | pixelated; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Choose scaling strategies for pixel art and low-resolution assets.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Images / Baseline 2026 partial
- Representative syntax: `image-rendering: crisp-edges | pixelated;`
- Position in category: 13 / 15
