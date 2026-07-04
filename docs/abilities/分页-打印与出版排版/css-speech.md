# CSS Speech

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSS%20Speech%20CSS" caniuse="https://caniuse.com/?search=CSS%20Speech" status="Speech 1" />

## 简明说明

面向语音渲染的样式控制。

## 代表语法

```css
speak, voice-family, pause-before/after
```

## Demo 演示

<CssDemo title="CSS Speech" code=".target {
  /* speak, voice-family, pause-before/after */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「面向语音渲染的样式控制。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：分页、打印与出版排版
- 成熟度 / 来源：Speech 1
- 原始代表语法：`speak, voice-family, pause-before/after`
- 本分类序号：9 / 9
