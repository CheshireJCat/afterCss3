# Logical viewport units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E9%80%BB%E8%BE%91%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D%20CSS" caniuse="https://caniuse.com/?search=%E9%80%BB%E8%BE%91%E8%A7%86%E5%8F%A3%E5%8D%95%E4%BD%8D" status="Values 4" label="Reference links" />

## Plain-language explanation

Define viewport units along inline and block axes.

## Representative syntax

```css
vi, vb
```

## Demo

<CssDemo title="Logical viewport units" css-b64="LyogRmVhdHVyZSBmb2N1czogdmksIHZiICovCi5kZW1vLWZyYW1lIHsKICBkaXNwbGF5OiBncmlkOwogIGdhcDogMTZweDsKfQouZGVtby10aXRsZSB7CiAgbWFyZ2luOiAwOwogIGZvbnQtc2l6ZTogMS4zNXJlbTsKICBsaW5lLWhlaWdodDogMS4xOwogIGxldHRlci1zcGFjaW5nOiAwOwp9Ci5kZW1vLWNvcHkgewogIG1hcmdpbjogMDsKICBjb2xvcjogY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDcyJSwgQ2FudmFzKTsKICBsaW5lLWhlaWdodDogMS41NTsKfQouZGVtby1jaGlwIHsKICBkaXNwbGF5OiBpbmxpbmUtZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIHdpZHRoOiBtYXgtY29udGVudDsKICBtaW4taGVpZ2h0OiAyOHB4OwogIHBhZGRpbmc6IDAgMTBweDsKICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgMTglLCB0cmFuc3BhcmVudCk7CiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDYlLCBDYW52YXMpOwogIGZvbnQ6IDcwMCAuNzVyZW0vMSB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgbW9ub3NwYWNlOwogIHRyYW5zaXRpb246IDIyMG1zIGVhc2U7Cn0KLmRlbW8tY2FyZCB7CiAgZGlzcGxheTogZ3JpZDsKICBnYXA6IDEycHg7CiAgcGFkZGluZzogMThweDsKICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgMTYlLCB0cmFuc3BhcmVudCk7CiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXMgOTYlLCBDYW52YXNUZXh0KTsKICBib3gtc2hhZG93OiAwIDE4cHggNDhweCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgMTAlLCB0cmFuc3BhcmVudCk7CiAgdHJhbnNpdGlvbjogMjIwbXMgZWFzZTsKfQouZGVtby1tZWRpYSB7CiAgbWluLWhlaWdodDogOTBweDsKICBiYWNrZ3JvdW5kOgogICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgY29sb3ItbWl4KGluIG9rbGNoLCBva2xjaCg2NyUgMC4xNSAxOTApIDI2JSwgQ2FudmFzKSwgdHJhbnNwYXJlbnQpLAogICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDglLCB0cmFuc3BhcmVudCkgMCA4cHgsIHRyYW5zcGFyZW50IDhweCAxNnB4KTsKICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgMTIlLCB0cmFuc3BhcmVudCk7Cn0KLmRlbW8tY2FyZCB7CiAgaW5saW5lLXNpemU6IG1pbigxMDAlLCA1NjBweCk7CiAgcGFkZGluZzogY2xhbXAoMTRweCwgNHZ3LCAyOHB4KTsKfQouZGVtby10aXRsZSB7CiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCA2dncsIDIuNnJlbSk7Cn0KLmRlbW8tbWVkaWEgewogIGFzcGVjdC1yYXRpbzogMTYgLyA3Owp9Cg==" code-b64="LyogRmVhdHVyZSBmb2N1czogdmksIHZiICovCi5kZW1vLWNhcmQgewogIGlubGluZS1zaXplOiBtaW4oMTAwJSwgNTYwcHgpOwogIHBhZGRpbmc6IGNsYW1wKDE0cHgsIDR2dywgMjhweCk7Cn0KLmRlbW8tdGl0bGUgewogIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgNnZ3LCAyLjZyZW0pOwp9Ci5kZW1vLW1lZGlhIHsKICBhc3BlY3QtcmF0aW86IDE2IC8gNzsKfQ==" html-b64="PGRpdiBjbGFzcz0iZGVtby1jYXJkIj4KICA8ZGl2IGNsYXNzPSJkZW1vLW1lZGlhIj48L2Rpdj4KICA8c3BhbiBjbGFzcz0iZGVtby1jaGlwIj5mbHVpZCBzaXppbmc8L3NwYW4+CiAgPGg0IGNsYXNzPSJkZW1vLXRpdGxlIj5GbHVpZCBtZXRyaWMgY2FyZDwvaDQ+CiAgPHAgY2xhc3M9ImRlbW8tY29weSI+VHlwZSwgcmF0aW8sIGFuZCBpbnRlcm5hbCBzcGFjZSBmb2xsb3cgdGhlIGF2YWlsYWJsZSByb29tLjwvcD4KPC9kaXY+" caption="This example lets size relationships come from CSS constraints instead of a fixed pixel value." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Logical viewport units in reading and editorial UI when you need to protect readability when copy length, language, or font metrics vary. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
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

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4
- Representative syntax: `vi, vb`
- Position in category: 7 / 17
