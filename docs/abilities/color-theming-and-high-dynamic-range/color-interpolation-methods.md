# Color interpolation methods

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E9%A2%9C%E8%89%B2%E6%8F%92%E5%80%BC%E6%96%B9%E6%B3%95%20CSS" caniuse="https://caniuse.com/?search=%E9%A2%9C%E8%89%B2%E6%8F%92%E5%80%BC%E6%96%B9%E6%B3%95" status="Images 4 + Color 4" label="Reference links" />

## Plain-language explanation

Control the color space and hue interpolation used by gradients and animations.

## Representative syntax

```css
linear-gradient(in oklab, red, blue)
```

## Demo

<CssDemo title="Color interpolation methods" code=".target {
  /* linear-gradient(in oklab, red, blue) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control the color space and hue interpolation used by gradients and animations.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Color, Theming, and High Dynamic Range
- Maturity / source: Images 4 + Color 4
- Representative syntax: `linear-gradient(in oklab, red, blue)`
- Position in category: 10 / 15
