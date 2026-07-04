# Scroll anchoring

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Scroll%20anchoring%20CSS" caniuse="https://caniuse.com/?search=Scroll%20anchoring" status="Scroll Anchoring 1" label="Reference links" />

## Plain-language explanation

Keep viewport position stable when content is inserted.

## Representative syntax

```css
overflow-anchor
```

## Demo

<CssDemo title="Scroll anchoring" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Keep viewport position stable when content is inserted.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Scroll Anchoring 1
- Representative syntax: `overflow-anchor`
- Position in category: 5 / 10
