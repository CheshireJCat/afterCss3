# cursor url-set

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=cursor%20url-set%20CSS" caniuse="https://caniuse.com/?search=cursor" status="CSS UI 4 / pre-CR exception" label="Reference links" />

## Plain-language explanation

Provide high-resolution cursor assets more clearly.

## Representative syntax

```css
cursor: url-set(...), pointer;
```

## Demo

<CssDemo title="cursor url-set" code=".target {
  /* cursor: url-set(...), pointer; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Provide high-resolution cursor assets more clearly.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: CSS UI 4 / pre-CR exception
- Representative syntax: `cursor: url-set(...), pointer;`
- Position in category: 8 / 12
