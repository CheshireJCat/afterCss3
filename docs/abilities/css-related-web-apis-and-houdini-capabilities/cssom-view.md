# CSSOM View

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSSOM%20View%20CSS" caniuse="https://caniuse.com/?search=ect%28%29" status="CSSOM View" label="Reference links" />

## Plain-language explanation

Query viewports, scrolling, and layout boxes.

## Representative syntax

```css
getBoundingClientRect(), scrollIntoView(), visualViewport
```

## Demo

<CssDemo title="CSSOM View" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Query viewports, scrolling, and layout boxes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: CSSOM View
- Representative syntax: `getBoundingClientRect(), scrollIntoView(), visualViewport`
- Position in category: 2 / 11
