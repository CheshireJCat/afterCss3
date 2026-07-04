# Flow root

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Flow%20root%20CSS" caniuse="https://caniuse.com/?search=display" status="Display 3" label="Reference links" />

## Plain-language explanation

Create a new block formatting context without clearfix hacks.

## Representative syntax

```css
display: flow-root;
```

## Demo

<CssDemo title="Flow root" code=".target {
  /* display: flow-root; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Create a new block formatting context without clearfix hacks.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Display 3
- Representative syntax: `display: flow-root;`
- Position in category: 7 / 16
