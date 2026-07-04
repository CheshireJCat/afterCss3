# Input capability queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E8%BE%93%E5%85%A5%E8%83%BD%E5%8A%9B%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E8%BE%93%E5%85%A5%E8%83%BD%E5%8A%9B%E6%9F%A5%E8%AF%A2" status="Media Queries 4" label="Reference links" />

## Plain-language explanation

Adapt UI for mouse, touch, pen, and other input capabilities.

## Representative syntax

```css
hover, pointer, any-hover, any-pointer
```

## Demo

<CssDemo title="Input capability queries" code=".target {
  /* hover, pointer, any-hover, any-pointer */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Adapt UI for mouse, touch, pen, and other input capabilities.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 4
- Representative syntax: `hover, pointer, any-hover, any-pointer`
- Position in category: 2 / 13
