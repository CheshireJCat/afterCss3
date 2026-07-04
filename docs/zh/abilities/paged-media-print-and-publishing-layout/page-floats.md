# page floats

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=page%20floats%20CSS" caniuse="https://caniuse.com/?search=page%20floats" status="Page Floats 3 草案" label="参考链接" />

## 简明说明

出版物中的图表浮动与延后放置。

## 代表语法

```css
float-reference, float-defer, float-offset
```

## Demo 演示

<CssDemo title="page floats" code=".target {
  /* float-reference, float-defer, float-offset */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「出版物中的图表浮动与延后放置。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 分页、打印与出版排版
- 成熟度 / 来源: Page Floats 3 草案
- 原始代表语法: `float-reference, float-defer, float-offset`
- 本分类序号：7 / 9
