# typed attr()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=typed%20attr%28%29%20CSS" caniuse="https://caniuse.com/?search=width" status="Values 5 / 部分实现" />

## 简明说明

从 HTML 属性读取 typed value，用于 content 以外属性。

## 代表语法

```css
width: attr(data-columns type(<integer>)) * 1rem;
```

## Demo 演示

<CssDemo title="typed attr()" code=".target {
  /* width: attr(data-columns type(&lt;integer&gt;)) * 1rem; */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「从 HTML 属性读取 typed value，用于 content 以外属性。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：尺寸、单位、数学和值函数
- 成熟度 / 来源：Values 5 / 部分实现
- 原始代表语法：`width: attr(data-columns type(&lt;integer&gt;)) * 1rem;`
- 本分类序号：11 / 17
