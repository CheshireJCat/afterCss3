# Reading flow/order

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Reading%20flow%2Forder%20CSS" caniuse="https://caniuse.com/?search=reading-flow" status="Display 4 / implementation in progress" label="Reference links" />

## Plain-language explanation

Make assistive technology and tab order follow the intended visual layout.

## Representative syntax

```css
reading-flow: grid-rows; reading-order: 2;
```

## Demo

<CssDemo title="Reading flow/order" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Make assistive technology and tab order follow the intended visual layout.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Display 4 / implementation in progress
- Representative syntax: `reading-flow: grid-rows; reading-order: 2;`
- Position in category: 13 / 16
