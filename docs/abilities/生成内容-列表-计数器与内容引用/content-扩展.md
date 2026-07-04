# content 扩展

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=content%20%E6%89%A9%E5%B1%95%20CSS" caniuse="https://caniuse.com/?search=content" status="Generated Content 3" />

## 简明说明

生成内容、替代文本、图像内容。

## 代表语法

```css
content: url(icon.svg) / '替代文本';
```

## Demo 演示

<CssDemo title="content 扩展" code=".target {
  /* content: url(icon.svg) / '替代文本'; */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「生成内容、替代文本、图像内容。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：生成内容、列表、计数器与内容引用
- 成熟度 / 来源：Generated Content 3
- 原始代表语法：`content: url(icon.svg) / '替代文本';`
- 本分类序号：4 / 9
