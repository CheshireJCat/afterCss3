# CSSOM / Typed OM

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSSOM%20%2F%20Typed%20OM%20CSS" caniuse="https://caniuse.com/?search=CSSOM%20%2F%20Typed%20OM" status="CSSOM / Houdini" />

## 简明说明

以结构化 API 操作 CSS 值，减少字符串拼接。

## 代表语法

```css
element.attributeStyleMap.set('width', CSS.px(10));
```

## Demo 演示

<CssDemo title="CSSOM / Typed OM" code=".target {
  /* element.attributeStyleMap.set('width', CSS.px(10)); */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「以结构化 API 操作 CSS 值，减少字符串拼接。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：语言架构、级联与复用
- 成熟度 / 来源：CSSOM / Houdini
- 原始代表语法：`element.attributeStyleMap.set('width', CSS.px(10));`
- 本分类序号：12 / 12
