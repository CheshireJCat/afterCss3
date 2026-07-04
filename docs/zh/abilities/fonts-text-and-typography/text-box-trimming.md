# text-box trimming

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=text-box%20trimming%20CSS" caniuse="https://caniuse.com/?search=text-box%20trimming" status="Inline 3 / Snapshot 预 CR 可发布" label="参考链接" />

## 简明说明

去除字体盒多余 leading，实现更精确垂直对齐。

## 代表语法

```css
text-box-trim, text-box-edge, text-box
```

## Demo 演示

<CssDemo title="text-box trimming" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「去除字体盒多余 leading，实现更精确垂直对齐。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 字体、文字与排版
- 成熟度 / 来源: Inline 3 / Snapshot 预 CR 可发布
- 原始代表语法: `text-box-trim, text-box-edge, text-box`
- 本分类序号：12 / 18
