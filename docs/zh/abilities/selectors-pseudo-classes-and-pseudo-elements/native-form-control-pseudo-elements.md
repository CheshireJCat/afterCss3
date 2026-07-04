# 原生表单部件伪元素

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Apicker%28%29%20CSS" caniuse="https://caniuse.com/?search=%3A%3Apicker%28%29" status="CSS Forms 1 草案" label="参考链接" />

## 简明说明

更细粒度地样式化 select、checkbox、range、date/time 等控件。

## 代表语法

```css
::picker(), ::picker-icon, ::checkmark, ::thumb, ::track, ::fill, ::field-text, ::field-component, ::field-separator
```

## Demo 演示

<CssDemo title="原生表单部件伪元素" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「更细粒度地样式化 select、checkbox、range、date/time 等控件。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 选择器、伪类与伪元素
- 成熟度 / 来源: CSS Forms 1 草案
- 原始代表语法: `::picker(), ::picker-icon, ::checkmark, ::thumb, ::track, ::fill, ::field-text, ::field-component, ::field-separator`
- 本分类序号：15 / 15
