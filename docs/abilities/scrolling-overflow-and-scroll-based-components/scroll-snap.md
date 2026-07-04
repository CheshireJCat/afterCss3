# Scroll snap

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap" caniuse="https://caniuse.com/?search=Scroll%20snap" status="candidate recommendation" label="Reference links" />

## Plain-language explanation

Build native snap scrolling, carousels, and paged scrolling.

## Representative syntax

```css
scroll-snap-type, scroll-snap-align, scroll-padding, scroll-margin
```

## Demo

<CssDemo title="Scroll snap" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Build native snap scrolling, carousels, and paged scrolling.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: candidate recommendation
- Representative syntax: `scroll-snap-type, scroll-snap-align, scroll-padding, scroll-margin`
- Position in category: 1 / 10
