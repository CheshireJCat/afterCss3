# Multiple backgrounds and background control

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%A4%9A%E8%83%8C%E6%99%AF%E4%B8%8E%E8%83%8C%E6%99%AF%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=%E5%A4%9A%E8%83%8C%E6%99%AF%E4%B8%8E%E8%83%8C%E6%99%AF%E6%8E%A7%E5%88%B6" status="Backgrounds 3" label="Reference links" />

## Plain-language explanation

Control multiple background layers, clipping, positioning, and sizing.

## Representative syntax

```css
background-size, background-origin, background-clip, multiple backgrounds
```

## Demo

<CssDemo title="Multiple backgrounds and background control" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control multiple background layers, clipping, positioning, and sizing.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Backgrounds 3
- Representative syntax: `background-size, background-origin, background-clip, multiple backgrounds`
- Position in category: 1 / 15
