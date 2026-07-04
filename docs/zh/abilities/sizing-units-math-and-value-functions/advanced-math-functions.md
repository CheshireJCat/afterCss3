# 进阶数学函数

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=round%28%29%20CSS" caniuse="https://caniuse.com/?search=round%28%29" status="Values 4 / Baseline 多项" label="参考链接" />

## 简明说明

原生网格计算、三角布局、指数/取整/符号判断。

## 代表语法

```css
round(), mod(), rem(), sin(), cos(), tan(), asin(), acos(), atan(), atan2(), pow(), sqrt(), hypot(), log(), exp(), abs(), sign()
```

## Demo 演示

<CssDemo title="进阶数学函数" css-b64="Lyog54m55oCn54Sm54K5OiByb3VuZCgpLCBtb2QoKSwgcmVtKCksIHNpbigpLCBjb3MoKSwgdGFuKCksIGFzaW4oKSwgYWNvcygpLCBhdGFuKCksIGF0YW4yKCksIHBvdygpLCBzcXJ0KCksIGh5cG90KCksIGxvZygpLCBleHAoKSwgYWJzKCksIHNpZ24oKSAqLwouZGVtby1mcmFtZSB7CiAgZGlzcGxheTogZ3JpZDsKICBnYXA6IDE2cHg7Cn0KLmRlbW8tdGl0bGUgewogIG1hcmdpbjogMDsKICBmb250LXNpemU6IDEuMzVyZW07CiAgbGluZS1oZWlnaHQ6IDEuMTsKICBsZXR0ZXItc3BhY2luZzogMDsKfQouZGVtby1jb3B5IHsKICBtYXJnaW46IDA7CiAgY29sb3I6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA3MiUsIENhbnZhcyk7CiAgbGluZS1oZWlnaHQ6IDEuNTU7Cn0KLmRlbW8tY2hpcCB7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICB3aWR0aDogbWF4LWNvbnRlbnQ7CiAgbWluLWhlaWdodDogMjhweDsKICBwYWRkaW5nOiAwIDEwcHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE4JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA2JSwgQ2FudmFzKTsKICBmb250OiA3MDAgLjc1cmVtLzEgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLWNhcmQgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxMnB4OwogIHBhZGRpbmc6IDE4cHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE2JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzIDk2JSwgQ2FudmFzVGV4dCk7CiAgYm94LXNoYWRvdzogMCAxOHB4IDQ4cHggY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEwJSwgdHJhbnNwYXJlbnQpOwogIHRyYW5zaXRpb246IDIyMG1zIGVhc2U7Cn0KLmRlbW8tbWVkaWEgewogIG1pbi1oZWlnaHQ6IDkwcHg7CiAgYmFja2dyb3VuZDoKICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgb2tsY2goNjclIDAuMTUgMTkwKSAyNiUsIENhbnZhcyksIHRyYW5zcGFyZW50KSwKICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA4JSwgdHJhbnNwYXJlbnQpIDAgOHB4LCB0cmFuc3BhcmVudCA4cHggMTZweCk7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEyJSwgdHJhbnNwYXJlbnQpOwp9Ci5kZW1vLWNhcmQgewogIGlubGluZS1zaXplOiBtaW4oMTAwJSwgNTYwcHgpOwogIHBhZGRpbmc6IGNsYW1wKDE0cHgsIDR2dywgMjhweCk7Cn0KLmRlbW8tdGl0bGUgewogIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgNnZ3LCAyLjZyZW0pOwp9Ci5kZW1vLW1lZGlhIHsKICBhc3BlY3QtcmF0aW86IDE2IC8gNzsKfQo=" code-b64="Lyog54m55oCn54Sm54K5OiByb3VuZCgpLCBtb2QoKSwgcmVtKCksIHNpbigpLCBjb3MoKSwgdGFuKCksIGFzaW4oKSwgYWNvcygpLCBhdGFuKCksIGF0YW4yKCksIHBvdygpLCBzcXJ0KCksIGh5cG90KCksIGxvZygpLCBleHAoKSwgYWJzKCksIHNpZ24oKSAqLwouZGVtby1jYXJkIHsKICBpbmxpbmUtc2l6ZTogbWluKDEwMCUsIDU2MHB4KTsKICBwYWRkaW5nOiBjbGFtcCgxNHB4LCA0dncsIDI4cHgpOwp9Ci5kZW1vLXRpdGxlIHsKICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDZ2dywgMi42cmVtKTsKfQouZGVtby1tZWRpYSB7CiAgYXNwZWN0LXJhdGlvOiAxNiAvIDc7Cn0=" html-b64="PGRpdiBjbGFzcz0iZGVtby1jYXJkIj4KICA8ZGl2IGNsYXNzPSJkZW1vLW1lZGlhIj48L2Rpdj4KICA8c3BhbiBjbGFzcz0iZGVtby1jaGlwIj5mbHVpZCBzaXppbmc8L3NwYW4+CiAgPGg0IGNsYXNzPSJkZW1vLXRpdGxlIj7mtYHlvI/mjIfmoIfljaE8L2g0PgogIDxwIGNsYXNzPSJkZW1vLWNvcHkiPuWtl+WPt+OAgeavlOS+i+WSjOWGhemDqOepuumXtOmDvei3n+maj+WPr+eUqOepuumXtOWPmOWMluOAgjwvcD4KPC9kaXY+" caption="这个示例让尺寸关系来自 CSS 约束本身，而不是固定写死一个像素值。" lang="zh-CN" badge="实用演示" />

## 什么时候用

<div class="usage-grid">
<section>
  <h3>适合场景</h3>
  <p>适合用于复杂布局：如果目标是把对齐、换行和顺序表达成布局规则，而不是增加一层层 wrapper，进阶数学函数 通常比额外加 class、wrapper 或脚本更直接。</p>
</section>
<section>
  <h3>例子</h3>
  <p>设置页可以让所有嵌套控件行对齐，响应式图库也能选择合适的排列方式。</p>
</section>
<section>
  <h3>注意点</h3>
  <p>布局特性可能间接改变阅读和焦点顺序。不要只看截图，要用键盘走一遍。</p>
</section>
</div>

## 迁移来源

- 分类: 尺寸、单位、数学和值函数
- 成熟度 / 来源: Values 4 / Baseline 多项
- 原始代表语法: `round(), mod(), rem(), sin(), cos(), tan(), asin(), acos(), atan(), atan2(), pow(), sqrt(), hypot(), log(), exp(), abs(), sign()`
- 本分类序号：4 / 17
