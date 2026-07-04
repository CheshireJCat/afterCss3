# CSS Nesting

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting" caniuse="https://caniuse.com/?search=%40media" status="Snapshot 粗略互通" />

## 简明说明

原生嵌套选择器和嵌套条件规则，替代预处理器的一部分能力。

## 代表语法

```css
.card { & h2 { ... } @media (...) { ... } }
```

## Demo 演示

<CssDemo title="CSS Nesting" code=".card { &amp; h2 { ... } @media (...) { ... } }" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「原生嵌套选择器和嵌套条件规则，替代预处理器的一部分能力。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：语言架构、级联与复用
- 成熟度 / 来源：Snapshot 粗略互通
- 原始代表语法：`.card { &amp; h2 { ... } @media (...) { ... } }`
- 本分类序号：6 / 12
