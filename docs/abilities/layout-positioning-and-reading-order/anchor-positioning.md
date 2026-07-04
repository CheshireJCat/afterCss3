# Anchor positioning

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning" caniuse="https://caniuse.com/?search=position-anchor" status="Current Work draft" label="Reference links" />

## Plain-language explanation

Position tooltips, popovers, and menus relative to anchors without JavaScript.

## Representative syntax

```css
position-anchor: --btn; top: anchor(bottom); position-area: bottom center;
```

## Demo

<CssDemo title="Anchor positioning" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Position tooltips, popovers, and menus relative to anchors without JavaScript.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Current Work draft
- Representative syntax: `position-anchor: --btn; top: anchor(bottom); position-area: bottom center;`
- Position in category: 11 / 16
