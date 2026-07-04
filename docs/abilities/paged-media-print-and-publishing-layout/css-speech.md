# CSS Speech

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSS%20Speech%20CSS" caniuse="https://caniuse.com/?search=CSS%20Speech" status="Speech 1" label="Reference links" />

## Plain-language explanation

Style spoken rendering.

## Representative syntax

```css
speak, voice-family, pause-before/after
```

## Demo

<CssDemo title="CSS Speech" code=".target {
  /* speak, voice-family, pause-before/after */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style spoken rendering.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Speech 1
- Representative syntax: `speak, voice-family, pause-before/after`
- Position in category: 9 / 9
