# 函数式选择器

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Ais%28%29%20CSS" caniuse="https://caniuse.com/?search=%3Ais%28%29" status="Selectors 4 / Snapshot 预 CR 可发布" label="参考链接" />

## 简明说明

组合复杂条件、降低或控制 specificity、父/关系选择。

## 代表语法

```css
:is(), :where(), :has(), :not(.a, .b)
```

## Demo 演示

<CssDemo title="函数式选择器" code=".stage:has(.target:hover) .target {
  border-radius: 999px;
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「组合复杂条件、降低或控制 specificity、父/关系选择。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 选择器、伪类与伪元素
- 成熟度 / 来源: Selectors 4 / Snapshot 预 CR 可发布
- 原始代表语法: `:is(), :where(), :has(), :not(.a, .b)`
- 本分类序号：1 / 15
