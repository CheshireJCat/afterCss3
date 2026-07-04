# interpolate-size

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=interpolate-size%20CSS" caniuse="https://caniuse.com/?search=interpolate-size" status="Values/Box Sizing" label="Reference links" />

## Plain-language explanation

Allow intrinsic sizes such as auto and min-content to animate.

## Representative syntax

```css
interpolate-size: allow-keywords;
```

## Demo

<CssDemo title="interpolate-size" code=".target {
  /* interpolate-size: allow-keywords; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Allow intrinsic sizes such as auto and min-content to animate.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values/Box Sizing
- Representative syntax: `interpolate-size: allow-keywords;`
- Position in category: 9 / 17
