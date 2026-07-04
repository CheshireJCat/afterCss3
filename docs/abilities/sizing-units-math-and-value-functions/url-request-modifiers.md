# URL request modifiers

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=URL%20%E8%AF%B7%E6%B1%82%E4%BF%AE%E9%A5%B0%20CSS" caniuse="https://caniuse.com/?search=src%28%29" status="Values 5 / Snapshot pre-CR exception" label="Reference links" />

## Plain-language explanation

Attach metadata such as integrity to CSS resource requests.

## Representative syntax

```css
url(... integrity(...)), src()
```

## Demo

<CssDemo title="URL request modifiers" code=".target {
  /* url(... integrity(...)), src() */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Attach metadata such as integrity to CSS resource requests.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 / Snapshot pre-CR exception
- Representative syntax: `url(... integrity(...)), src()`
- Position in category: 15 / 17
