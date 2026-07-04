# border-shape / partial borders

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=border-shape%20%2F%20partial%20borders%20CSS" caniuse="https://caniuse.com/?search=border-shape" status="Borders 4 draft" label="Reference links" />

## Plain-language explanation

Describe complex border paths, partial borders, and box-decoration extensions.

## Representative syntax

```css
border-shape: ...; border-limit: ...
```

## Demo

<CssDemo title="border-shape / partial borders" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Describe complex border paths, partial borders, and box-decoration extensions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Borders 4 draft
- Representative syntax: `border-shape: ...; border-limit: ...`
- Position in category: 7 / 15
