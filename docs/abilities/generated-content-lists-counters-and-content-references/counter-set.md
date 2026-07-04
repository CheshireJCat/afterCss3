# counter-set

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=counter-set%20CSS" caniuse="https://caniuse.com/?search=counter-set" status="Lists 3" label="Reference links" />

## Plain-language explanation

Set counter values explicitly to complement reset and increment.

## Representative syntax

```css
counter-set: section 3;
```

## Demo

<CssDemo title="counter-set" code=".target {
  /* counter-set: section 3; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Set counter values explicitly to complement reset and increment.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: Lists 3
- Representative syntax: `counter-set: section 3;`
- Position in category: 2 / 9
