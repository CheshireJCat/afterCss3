# Scroll behavior

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Scroll%20behavior%20CSS" caniuse="https://caniuse.com/?search=scroll-behavior" status="CSSOM View" label="Reference links" />

## Plain-language explanation

Enable native smooth scrolling.

## Representative syntax

```css
scroll-behavior: smooth;
```

## Demo

<CssDemo title="Scroll behavior" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Enable native smooth scrolling.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: CSSOM View
- Representative syntax: `scroll-behavior: smooth;`
- Position in category: 2 / 10
