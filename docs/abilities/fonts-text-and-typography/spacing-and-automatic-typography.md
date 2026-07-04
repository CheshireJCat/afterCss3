# Spacing and automatic typography

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E9%97%B4%E8%B7%9D%E4%B8%8E%E8%87%AA%E5%8A%A8%E6%8E%92%E7%89%88%20CSS" caniuse="https://caniuse.com/?search=%E9%97%B4%E8%B7%9D%E4%B8%8E%E8%87%AA%E5%8A%A8%E6%8E%92%E7%89%88" status="Text 4/5" label="Reference links" />

## Plain-language explanation

Handle CJK punctuation, Latin/East Asian spacing, and character spacing.

## Representative syntax

```css
text-spacing-trim, text-autospace, word-space-transform
```

## Demo

<CssDemo title="Spacing and automatic typography" css-b64="LyogRmVhdHVyZSBmb2N1czogdGV4dC1zcGFjaW5nLXRyaW0sIHRleHQtYXV0b3NwYWNlLCB3b3JkLXNwYWNlLXRyYW5zZm9ybSAqLwouZGVtby1mcmFtZSB7CiAgZGlzcGxheTogZ3JpZDsKICBnYXA6IDE2cHg7Cn0KLmRlbW8tdGl0bGUgewogIG1hcmdpbjogMDsKICBmb250LXNpemU6IDEuMzVyZW07CiAgbGluZS1oZWlnaHQ6IDEuMTsKICBsZXR0ZXItc3BhY2luZzogMDsKfQouZGVtby1jb3B5IHsKICBtYXJnaW46IDA7CiAgY29sb3I6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA3MiUsIENhbnZhcyk7CiAgbGluZS1oZWlnaHQ6IDEuNTU7Cn0KLmRlbW8tY2hpcCB7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICB3aWR0aDogbWF4LWNvbnRlbnQ7CiAgbWluLWhlaWdodDogMjhweDsKICBwYWRkaW5nOiAwIDEwcHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE4JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA2JSwgQ2FudmFzKTsKICBmb250OiA3MDAgLjc1cmVtLzEgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLWNhcmQgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxMnB4OwogIHBhZGRpbmc6IDE4cHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE2JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzIDk2JSwgQ2FudmFzVGV4dCk7CiAgYm94LXNoYWRvdzogMCAxOHB4IDQ4cHggY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEwJSwgdHJhbnNwYXJlbnQpOwogIHRyYW5zaXRpb246IDIyMG1zIGVhc2U7Cn0KLmRlbW8tbWVkaWEgewogIG1pbi1oZWlnaHQ6IDkwcHg7CiAgYmFja2dyb3VuZDoKICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgb2tsY2goNjclIDAuMTUgMTkwKSAyNiUsIENhbnZhcyksIHRyYW5zcGFyZW50KSwKICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA4JSwgdHJhbnNwYXJlbnQpIDAgOHB4LCB0cmFuc3BhcmVudCA4cHggMTZweCk7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEyJSwgdHJhbnNwYXJlbnQpOwp9Ci5kZW1vLWNhcmQgewogIG1heC1pbmxpbmUtc2l6ZTogNTYwcHg7Cn0KLmRlbW8tdGl0bGUgewogIHRleHQtd3JhcDogYmFsYW5jZTsKfQouZGVtby1jb3B5IHsKICBtYXgtaW5saW5lLXNpemU6IDQ0Y2g7CiAgaHlwaGVuczogYXV0bzsKfQo=" code-b64="LyogRmVhdHVyZSBmb2N1czogdGV4dC1zcGFjaW5nLXRyaW0sIHRleHQtYXV0b3NwYWNlLCB3b3JkLXNwYWNlLXRyYW5zZm9ybSAqLwouZGVtby1jYXJkIHsKICBtYXgtaW5saW5lLXNpemU6IDU2MHB4Owp9Ci5kZW1vLXRpdGxlIHsKICB0ZXh0LXdyYXA6IGJhbGFuY2U7Cn0KLmRlbW8tY29weSB7CiAgbWF4LWlubGluZS1zaXplOiA0NGNoOwogIGh5cGhlbnM6IGF1dG87Cn0=" html-b64="PGFydGljbGUgY2xhc3M9ImRlbW8tY2FyZCI+CiAgPHNwYW4gY2xhc3M9ImRlbW8tY2hpcCI+cmVhZGluZyBzdXJmYWNlPC9zcGFuPgogIDxoNCBjbGFzcz0iZGVtby10aXRsZSI+UmVhbCB0eXBvZ3JhcGh5IHJ1bGVzIGZvciBtdWx0aWxpbmd1YWwgaGVhZGluZ3M8L2g0PgogIDxwIGNsYXNzPSJkZW1vLWNvcHkiPkxvbmcgdGl0bGVzLCBtaXhlZCBzY3JpcHRzLCBhbmQgc3VtbWFyaWVzIHJldmVhbCB0eXBvZ3JhcGh5IHByb2JsZW1zIGluc2lkZSBuYXJyb3cgY2FyZHMuPC9wPgo8L2FydGljbGU+" caption="This example uses realistic heading and summary copy to show how typography features improve a reading surface." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Spacing and automatic typography in reading and editorial UI when you need to protect readability when copy length, language, or font metrics vary. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
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
- Maturity / source: Text 4/5
- Representative syntax: `text-spacing-trim, text-autospace, word-space-transform`
- Position in category: 15 / 18
