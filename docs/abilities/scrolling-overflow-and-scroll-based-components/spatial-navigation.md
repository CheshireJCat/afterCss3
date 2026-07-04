# Spatial navigation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Spatial%20navigation%20CSS" caniuse="https://caniuse.com/?search=Spatial%20navigation" status="Spatial Navigation 1 draft" label="Reference links" />

## Plain-language explanation

Support directional-key navigation for remotes and keyboards.

## Representative syntax

```css
spatial-navigation-action, nav-*
```

## Demo

<CssDemo title="Spatial navigation" code=".target {
  /* spatial-navigation-action, nav-* */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Support directional-key navigation for remotes and keyboards.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Spatial Navigation 1 draft
- Representative syntax: `spatial-navigation-action, nav-*`
- Position in category: 10 / 10
