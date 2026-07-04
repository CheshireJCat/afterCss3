# Logical properties

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Logical%20properties%20CSS" caniuse="https://caniuse.com/?search=Logical%20properties" status="Snapshot 粗略互通" />

## 简明说明

按书写方向映射布局、边距、边框和尺寸。

## 代表语法

```css
margin-inline, padding-block, inset-inline-start, border-start-start-radius
```

## Demo 演示

<CssDemo title="Logical properties" code=".target {
  /* margin-inline, padding-block, inset-inline-start, border-start-start-radius */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「按书写方向映射布局、边距、边框和尺寸。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：Snapshot 粗略互通
- 原始代表语法：`margin-inline, padding-block, inset-inline-start, border-start-start-radius`
- 本分类序号：8 / 16
