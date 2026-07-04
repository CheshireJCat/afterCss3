# Custom media queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40custom-media%20CSS" caniuse="https://caniuse.com/?search=%40custom-media" status="Media Queries 5 draft" label="Reference links" />

## Plain-language explanation

Name and reuse common media conditions.

## Representative syntax

```css
@custom-media --narrow (width < 40rem);
```

## Demo

<CssDemo title="Custom media queries" code="@custom-media --narrow (width &lt; 40rem);" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Name and reuse common media conditions.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 5 draft
- Representative syntax: `@custom-media --narrow (width &lt; 40rem);`
- Position in category: 12 / 13
