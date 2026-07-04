# Overscroll behavior

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Overscroll%20behavior%20CSS" caniuse="https://caniuse.com/?search=overscroll-behavior" status="Overscroll 1" label="Reference links" />

## Plain-language explanation

Control scroll chaining and system bounce at scroll boundaries.

## Representative syntax

```css
overscroll-behavior: contain;
```

## Demo

<CssDemo title="Overscroll behavior" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Control scroll chaining and system bounce at scroll boundaries.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Overscroll 1
- Representative syntax: `overscroll-behavior: contain;`
- Position in category: 3 / 10
