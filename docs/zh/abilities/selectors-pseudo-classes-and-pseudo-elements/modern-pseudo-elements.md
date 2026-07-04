# 现代伪元素

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Amarker%20CSS" caniuse="https://caniuse.com/?search=%3A%3Amarker" status="Pseudo 4 / Forms / Highlight" label="参考链接" />

## 简明说明

列表标记、占位符、文件按钮、选区、高亮、顶层背景等可样式化。

## 代表语法

```css
::marker, ::placeholder, ::file-selector-button, ::selection, ::target-text, ::highlight(name), ::backdrop, ::details-content
```

## Demo 演示

<CssDemo title="现代伪元素" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「列表标记、占位符、文件按钮、选区、高亮、顶层背景等可样式化。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 选择器、伪类与伪元素
- 成熟度 / 来源: Pseudo 4 / Forms / Highlight
- 原始代表语法: `::marker, ::placeholder, ::file-selector-button, ::selection, ::target-text, ::highlight(name), ::backdrop, ::details-content`
- 本分类序号：12 / 15
