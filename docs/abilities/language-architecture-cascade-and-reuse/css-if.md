# CSS if()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSS%20if%28%29%20CSS" caniuse="https://caniuse.com/?search=width" status="Values/Conditional draft, partially implemented" label="Reference links" />

## Plain-language explanation

Write conditions inside property values with media(), supports(), and style().

## Representative syntax

```css
width: if(media(width > 60rem): 50%; else: 100%);
```

## Demo

<CssDemo title="CSS if()" code=".target {
  /* width: if(media(width &gt; 60rem): 50%; else: 100%); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Write conditions inside property values with media(), supports(), and style().
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Values/Conditional draft, partially implemented
- Representative syntax: `width: if(media(width &gt; 60rem): 50%; else: 100%);`
- Position in category: 9 / 12
