# CSS carousels

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Ascroll-button%28%29%20CSS" caniuse="https://caniuse.com/?search=%3A%3Ascroll-button%28%29" status="Overflow 5 draft" label="Reference links" />

## Plain-language explanation

Use scroll buttons, pagination dots, and scroll target groups without JavaScript.

## Representative syntax

```css
::scroll-button(), ::scroll-marker, scroll-target-group
```

## Demo

<CssDemo title="CSS carousels" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use scroll buttons, pagination dots, and scroll target groups without JavaScript.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Overflow 5 draft
- Representative syntax: `::scroll-button(), ::scroll-marker, scroll-target-group`
- Position in category: 8 / 10
