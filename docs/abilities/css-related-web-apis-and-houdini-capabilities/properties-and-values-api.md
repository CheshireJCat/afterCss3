# Properties and Values API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Properties%20and%20Values%20API%20CSS" caniuse="https://caniuse.com/?search=Properties%20and%20Values%20API" status="Houdini" label="Reference links" />

## Plain-language explanation

Register typed and animatable CSS custom properties at runtime.

## Representative syntax

```css
CSS.registerProperty(...)
```

## Demo

<CssDemo title="Properties and Values API" code=".target {
  /* CSS.registerProperty(...) */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Register typed and animatable CSS custom properties at runtime.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: Houdini
- Representative syntax: `CSS.registerProperty(...)`
- Position in category: 8 / 11
