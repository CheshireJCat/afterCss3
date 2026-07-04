# Logical viewport units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E9%80%BB%E8%BE%91%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D%20CSS" caniuse="https://caniuse.com/?search=%E9%80%BB%E8%BE%91%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D" status="Values 4" label="Reference links" />

## Plain-language explanation

Define viewport units along inline and block axes.

## Representative syntax

```css
vi, vb
```

## Demo

<CssDemo title="Logical viewport units" code=".target {
  /* vi, vb */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Define viewport units along inline and block axes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4
- Representative syntax: `vi, vb`
- Position in category: 7 / 17
