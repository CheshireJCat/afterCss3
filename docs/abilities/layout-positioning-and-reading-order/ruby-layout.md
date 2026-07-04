# Ruby layout

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Ruby%20layout%20CSS" caniuse="https://caniuse.com/?search=Ruby%20layout" status="Ruby 1 draft" label="Reference links" />

## Plain-language explanation

Typeset East Asian annotations and pronunciation guides.

## Representative syntax

```css
ruby-position, ruby-align, ruby-overhang
```

## Demo

<CssDemo title="Ruby layout" code=".target {
  /* ruby-position, ruby-align, ruby-overhang */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Typeset East Asian annotations and pronunciation guides.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Ruby 1 draft
- Representative syntax: `ruby-position, ruby-align, ruby-overhang`
- Position in category: 16 / 16
