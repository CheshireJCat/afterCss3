# cross-fade()/image()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=cross-fade%28%29%2Fimage%28%29%20CSS" caniuse="https://caniuse.com/?search=background" status="Images 4/5" label="Reference links" />

## Plain-language explanation

Blend CSS images, provide fallbacks, and handle directional images.

## Representative syntax

```css
background: cross-fade(url(a), url(b) 50%);
```

## Demo

<CssDemo title="cross-fade()/image()" code=".target {
  /* background: cross-fade(url(a), url(b) 50%); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Blend CSS images, provide fallbacks, and handle directional images.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Images 4/5
- Representative syntax: `background: cross-fade(url(a), url(b) 50%);`
- Position in category: 4 / 15
