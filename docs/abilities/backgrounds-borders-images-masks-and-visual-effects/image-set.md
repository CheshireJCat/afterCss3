# image-set()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=image-set%28%29%20CSS" caniuse="https://caniuse.com/?search=background-image" status="Images 4" label="Reference links" />

## Plain-language explanation

Choose assets by resolution, format, and type.

## Representative syntax

```css
background-image: image-set(url(a.avif) type('image/avif') 1x, url(a.png) 1x);
```

## Demo

<CssDemo title="image-set()" code=".target {
  /* background-image: image-set(url(a.avif) type('image/avif') 1x, url(a.png) 1x); */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Choose assets by resolution, format, and type.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Backgrounds, Borders, Images, Masks, and Visual Effects
- Maturity / source: Images 4
- Representative syntax: `background-image: image-set(url(a.avif) type('image/avif') 1x, url(a.png) 1x);`
- Position in category: 3 / 15
