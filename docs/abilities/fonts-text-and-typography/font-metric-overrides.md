# Font metric overrides

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E6%8C%87%E6%A0%87%E8%A6%86%E7%9B%96%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E6%8C%87%E6%A0%87%E8%A6%86%E7%9B%96" status="Fonts 4" label="Reference links" />

## Plain-language explanation

Reduce CLS and layout jumps caused by font replacement.

## Representative syntax

```css
size-adjust, ascent-override, descent-override, line-gap-override
```

## Demo

<CssDemo title="Font metric overrides" css-b64="LyogRmVhdHVyZSBmb2N1czogc2l6ZS1hZGp1c3QsIGFzY2VudC1vdmVycmlkZSwgZGVzY2VudC1vdmVycmlkZSwgbGluZS1nYXAtb3ZlcnJpZGUgKi8KLmRlbW8tZnJhbWUgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxNnB4Owp9Ci5kZW1vLXRpdGxlIHsKICBtYXJnaW46IDA7CiAgZm9udC1zaXplOiAxLjM1cmVtOwogIGxpbmUtaGVpZ2h0OiAxLjE7CiAgbGV0dGVyLXNwYWNpbmc6IDA7Cn0KLmRlbW8tY29weSB7CiAgbWFyZ2luOiAwOwogIGNvbG9yOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNzIlLCBDYW52YXMpOwogIGxpbmUtaGVpZ2h0OiAxLjU1Owp9Ci5kZW1vLWNoaXAgewogIGRpc3BsYXk6IGlubGluZS1mbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgd2lkdGg6IG1heC1jb250ZW50OwogIG1pbi1oZWlnaHQ6IDI4cHg7CiAgcGFkZGluZzogMCAxMHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxOCUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNiUsIENhbnZhcyk7CiAgZm9udDogNzAwIC43NXJlbS8xIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBtb25vc3BhY2U7CiAgdHJhbnNpdGlvbjogMjIwbXMgZWFzZTsKfQouZGVtby1jYXJkIHsKICBkaXNwbGF5OiBncmlkOwogIGdhcDogMTJweDsKICBwYWRkaW5nOiAxOHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxNiUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhcyA5NiUsIENhbnZhc1RleHQpOwogIGJveC1zaGFkb3c6IDAgMThweCA0OHB4IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMCUsIHRyYW5zcGFyZW50KTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLW1lZGlhIHsKICBtaW4taGVpZ2h0OiA5MHB4OwogIGJhY2tncm91bmQ6CiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIG9rbGNoKDY3JSAwLjE1IDE5MCkgMjYlLCBDYW52YXMpLCB0cmFuc3BhcmVudCksCiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgOCUsIHRyYW5zcGFyZW50KSAwIDhweCwgdHJhbnNwYXJlbnQgOHB4IDE2cHgpOwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMiUsIHRyYW5zcGFyZW50KTsKfQouZGVtby1jYXJkIHsKICBtYXgtaW5saW5lLXNpemU6IDU2MHB4Owp9Ci5kZW1vLXRpdGxlIHsKICB0ZXh0LXdyYXA6IGJhbGFuY2U7Cn0KLmRlbW8tY29weSB7CiAgbWF4LWlubGluZS1zaXplOiA0NGNoOwogIGh5cGhlbnM6IGF1dG87Cn0K" code-b64="LyogRmVhdHVyZSBmb2N1czogc2l6ZS1hZGp1c3QsIGFzY2VudC1vdmVycmlkZSwgZGVzY2VudC1vdmVycmlkZSwgbGluZS1nYXAtb3ZlcnJpZGUgKi8KLmRlbW8tY2FyZCB7CiAgbWF4LWlubGluZS1zaXplOiA1NjBweDsKfQouZGVtby10aXRsZSB7CiAgdGV4dC13cmFwOiBiYWxhbmNlOwp9Ci5kZW1vLWNvcHkgewogIG1heC1pbmxpbmUtc2l6ZTogNDRjaDsKICBoeXBoZW5zOiBhdXRvOwp9" html-b64="PGFydGljbGUgY2xhc3M9ImRlbW8tY2FyZCI+CiAgPHNwYW4gY2xhc3M9ImRlbW8tY2hpcCI+cmVhZGluZyBzdXJmYWNlPC9zcGFuPgogIDxoNCBjbGFzcz0iZGVtby10aXRsZSI+UmVhbCB0eXBvZ3JhcGh5IHJ1bGVzIGZvciBtdWx0aWxpbmd1YWwgaGVhZGluZ3M8L2g0PgogIDxwIGNsYXNzPSJkZW1vLWNvcHkiPkxvbmcgdGl0bGVzLCBtaXhlZCBzY3JpcHRzLCBhbmQgc3VtbWFyaWVzIHJldmVhbCB0eXBvZ3JhcGh5IHByb2JsZW1zIGluc2lkZSBuYXJyb3cgY2FyZHMuPC9wPgo8L2FydGljbGU+" caption="This example uses realistic heading and summary copy to show how typography features improve a reading surface." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Font metric overrides in reading and editorial UI when you need to protect readability when copy length, language, or font metrics vary. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
</section>
<section>
  <h3>Example</h3>
  <p>A bilingual card can balance the heading, clamp the summary, and keep inline annotations readable in a narrow column.</p>
</section>
<section>
  <h3>Watch out</h3>
  <p>Always test with real content extremes: long product names, mixed scripts, missing glyphs, and translated copy.</p>
</section>
</div>

## Source metadata

- Category: Fonts, Text, and Typography
- Maturity / source: Fonts 4
- Representative syntax: `size-adjust, ascent-override, descent-override, line-gap-override`
- Position in category: 3 / 18
