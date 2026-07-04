# Font metric overrides

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E6%8C%87%E6%A0%87%E8%A6%86%E7%9B%96%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E6%8C%87%E6%A0%87%E8%A6%86%E7%9B%96" status="Fonts 4" label="Reference links" />

## Plain-language explanation

Reduce CLS and layout jumps caused by font replacement.

## Representative syntax

```css
size-adjust, ascent-override, descent-override, line-gap-override
```

## Demo

<CssDemo title="Font metric overrides" code=".target {
  /* size-adjust, ascent-override, descent-override, line-gap-override */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Reduce CLS and layout jumps caused by font replacement.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 4
- Representative syntax: `size-adjust, ascent-override, descent-override, line-gap-override`
- Position in category: 3 / 18
