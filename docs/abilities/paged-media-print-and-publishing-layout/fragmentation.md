# Fragmentation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=fragmentation%20CSS" caniuse="https://caniuse.com/?search=fragmentation" status="Fragmentation 3/4" label="Reference links" />

## Plain-language explanation

Control breaks across pages, columns, and regions.

## Representative syntax

```css
break-before, break-after, break-inside, orphans, widows
```

## Demo

<CssDemo title="Fragmentation" code=".target {
  /* break-before, break-after, break-inside, orphans, widows */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control breaks across pages, columns, and regions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Fragmentation 3/4
- Representative syntax: `break-before, break-after, break-inside, orphans, widows`
- Position in category: 6 / 9
