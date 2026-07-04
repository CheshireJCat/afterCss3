# 增强 nth-child

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Anth-child%282n%20CSS" caniuse="https://caniuse.com/?search=%3Anth-child" status="Selectors 4" />

## 简明说明

按子集计算结构位置。

## 代表语法

```css
:nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))
```

## Demo 演示

<CssDemo title="增强 nth-child" code=":nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「按子集计算结构位置。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：选择器、伪类与伪元素
- 成熟度 / 来源：Selectors 4
- 原始代表语法：`:nth-child(2n of .item), :nth-last-child(odd of :not([hidden]))`
- 本分类序号：3 / 15
