# typed attr()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=typed%20attr%28%29%20CSS" caniuse="https://caniuse.com/?search=width" status="Values 5 / partially implemented" label="Reference links" />

## Plain-language explanation

Read typed HTML attribute values for properties beyond content.

## Representative syntax

```css
width: attr(data-columns type(<integer>)) * 1rem;
```

## Demo

<CssDemo title="typed attr()" code=".target {
  /* width: attr(data-columns type(&lt;integer&gt;)) * 1rem; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Read typed HTML attribute values for properties beyond content.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 / partially implemented
- Representative syntax: `width: attr(data-columns type(&lt;integer&gt;)) * 1rem;`
- Position in category: 11 / 17
