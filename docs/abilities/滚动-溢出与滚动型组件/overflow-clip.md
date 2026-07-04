# Overflow clip

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Overflow%20clip%20CSS" caniuse="https://caniuse.com/?search=overflow" status="Overflow 3/4" />

## 简明说明

不产生滚动容器的裁剪和裁剪边距。

## 代表语法

```css
overflow: clip; overflow-clip-margin: 1rem;
```

## Demo 演示

<CssDemo title="Overflow clip" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「不产生滚动容器的裁剪和裁剪边距。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：滚动、溢出与滚动型组件
- 成熟度 / 来源：Overflow 3/4
- 原始代表语法：`overflow: clip; overflow-clip-margin: 1rem;`
- 本分类序号：6 / 10
