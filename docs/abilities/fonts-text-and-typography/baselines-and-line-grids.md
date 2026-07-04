# Baselines and line grids

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%9F%BA%E7%BA%BF%E4%B8%8E%E8%A1%8C%E7%BD%91%E6%A0%BC%20CSS" caniuse="https://caniuse.com/?search=%E5%9F%BA%E7%BA%BF%E4%B8%8E%E8%A1%8C%E7%BD%91%E6%A0%BC" status="Inline/Rhythm/Line Grid" label="Reference links" />

## Plain-language explanation

Manage cross-script baselines, rhythm sizing, and line grids.

## Representative syntax

```css
baseline-shift, dominant-baseline, line-height-step, line-grid
```

## Demo

<CssDemo title="Baselines and line grids" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Manage cross-script baselines, rhythm sizing, and line grids.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Inline/Rhythm/Line Grid
- Representative syntax: `baseline-shift, dominant-baseline, line-height-step, line-grid`
- Position in category: 14 / 18
