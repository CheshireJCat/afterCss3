# Custom Highlight API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Custom%20Highlight%20API%20CSS" caniuse="https://caniuse.com/?search=Custom%20Highlight%20API" status="Highlight 1 / Baseline 2026" label="Reference links" />

## Plain-language explanation

Register ranges in JavaScript and style them with ::highlight(name).

## Representative syntax

```css
CSS.highlights.set('name', new Highlight(range));
```

## Demo

<CssDemo title="Custom Highlight API" code=".target {
  /* CSS.highlights.set('name', new Highlight(range)); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Register ranges in JavaScript and style them with ::highlight(name).
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Highlight 1 / Baseline 2026
- Representative syntax: `CSS.highlights.set('name', new Highlight(range));`
- Position in category: 7 / 11
