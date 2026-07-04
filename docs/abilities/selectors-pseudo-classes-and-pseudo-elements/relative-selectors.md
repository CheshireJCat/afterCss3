# Relative selectors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Ahas%28%3E%20CSS" caniuse="https://caniuse.com/?search=%3Ahas" status="Selectors 4" label="Reference links" />

## Plain-language explanation

Select an element based on children, following siblings, or relationship chains.

## Representative syntax

```css
:has(> img), :has(+ .error)
```

## Demo

<CssDemo title="Relative selectors" code=".stage:has(.target:hover) .target {
  border-radius: 999px;
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Select an element based on children, following siblings, or relationship chains.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: Selectors 4
- Representative syntax: `:has(&gt; img), :has(+ .error)`
- Position in category: 2 / 15
