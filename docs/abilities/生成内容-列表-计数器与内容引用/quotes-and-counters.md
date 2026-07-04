# quotes and counters

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=quotes%20and%20counters%20CSS" caniuse="https://caniuse.com/?search=counter%28%29" status="Generated Content/Lists" />

## 简明说明

语言化引号和层级编号。

## 代表语法

```css
open-quote, close-quote, counter(), counters()
```

## Demo 演示

<CssDemo title="quotes and counters" code=".target {
  /* open-quote, close-quote, counter(), counters() */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「语言化引号和层级编号。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：生成内容、列表、计数器与内容引用
- 成熟度 / 来源：Generated Content/Lists
- 原始代表语法：`open-quote, close-quote, counter(), counters()`
- 本分类序号：5 / 9
