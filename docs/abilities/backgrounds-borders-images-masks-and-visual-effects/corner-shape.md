# corner-shape

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=corner-shape%20CSS" caniuse="https://caniuse.com/?search=border-radius" status="Borders 4 / new capability" label="Reference links" />

## Plain-language explanation

Use bevels, notches, squircles, and other corner shapes beyond border-radius.

## Representative syntax

```css
border-radius: 2rem; corner-shape: squircle;
```

## Demo

<CssDemo title="corner-shape" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use bevels, notches, squircles, and other corner shapes beyond border-radius.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Borders 4 / new capability
- Representative syntax: `border-radius: 2rem; corner-shape: squircle;`
- Position in category: 6 / 15
