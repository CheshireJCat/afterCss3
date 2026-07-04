# Dynamic viewport units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%8A%A8%E6%80%81%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D%20CSS" caniuse="https://caniuse.com/?search=%E5%8A%A8%E6%80%81%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D" status="Values 4" label="Reference links" />

## Plain-language explanation

Handle mobile browser UI changes that break classic 100vh layouts.

## Representative syntax

```css
svh, lvh, dvh, svi, lvi, dvi, svb, lvb, dvb, dvmin, dvmax
```

## Demo

<CssDemo title="Dynamic viewport units" code=".target {
  /* svh, lvh, dvh, svi, lvi, dvi, svb, lvb, dvb, dvmin, dvmax */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Handle mobile browser UI changes that break classic 100vh layouts.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4
- Representative syntax: `svh, lvh, dvh, svi, lvi, dvi, svb, lvb, dvb, dvmin, dvmax`
- Position in category: 6 / 17
