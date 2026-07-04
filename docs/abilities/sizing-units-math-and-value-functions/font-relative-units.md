# Font-relative units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D" status="Values 4/5, partial Baseline 2026" label="Reference links" />

## Plain-language explanation

Use cap height, CJK ideographic size, line height, and root font metrics in layout.

## Representative syntax

```css
cap, ic, lh, rlh, rcap, rch, rex, ric
```

## Demo

<CssDemo title="Font-relative units" code=".target {
  /* cap, ic, lh, rlh, rcap, rch, rex, ric */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use cap height, CJK ideographic size, line height, and root font metrics in layout.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4/5, partial Baseline 2026
- Representative syntax: `cap, ic, lh, rlh, rcap, rch, rex, ric`
- Position in category: 8 / 17
