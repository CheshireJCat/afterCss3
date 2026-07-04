# Motion path

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Motion%20path%20CSS" caniuse="https://caniuse.com/?search=Motion%20path" status="Motion Path 1" label="Reference links" />

## Plain-language explanation

Position and animate elements along a path.

## Representative syntax

```css
offset-path, offset-distance, offset-rotate, offset-anchor
```

## Demo

<CssDemo title="Motion path" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Position and animate elements along a path.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: Motion Path 1
- Representative syntax: `offset-path, offset-distance, offset-rotate, offset-anchor`
- Position in category: 4 / 14
