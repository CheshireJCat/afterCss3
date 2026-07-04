# Multi-keyword display

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%A4%9A%E5%85%B3%E9%94%AE%E5%AD%97%20display%20CSS" caniuse="https://caniuse.com/?search=display" status="Display 3" label="Reference links" />

## Plain-language explanation

Split outer and inner display values for more precise layout semantics.

## Representative syntax

```css
display: inline flex; display: block flow-root; display: contents;
```

## Demo

<CssDemo title="Multi-keyword display" code=".stage { display: flex; justify-content: center; align-items: center; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Split outer and inner display values for more precise layout semantics.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Display 3
- Representative syntax: `display: inline flex; display: block flow-root; display: contents;`
- Position in category: 6 / 16
