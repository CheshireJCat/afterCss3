# filters

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=filters%20CSS" caniuse="https://caniuse.com/?search=filter" status="Filter Effects 1/2" label="Reference links" />

## Plain-language explanation

Apply post-processing effects to elements or background layers.

## Representative syntax

```css
filter: blur(8px) saturate(120%); backdrop-filter: blur(12px);
```

## Demo

<CssDemo title="filters" code=".target {
  /* filter: blur(8px) saturate(120%); backdrop-filter: blur(12px); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Apply post-processing effects to elements or background layers.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Filter Effects 1/2
- Representative syntax: `filter: blur(8px) saturate(120%); backdrop-filter: blur(12px);`
- Position in category: 11 / 15
