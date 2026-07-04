# Media Queries 4 范围语法

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40media%20CSS" caniuse="https://caniuse.com/?search=%40media" status="可靠候选" label="参考链接" />

## 简明说明

更接近数学表达的断点写法。

## 代表语法

```css
@media (40rem <= width < 80rem) { ... }
```

## Demo 演示

<CssDemo title="Media Queries 4 范围语法" code="@media (40rem &lt;= width &lt; 80rem) { ... }" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「更接近数学表达的断点写法。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 条件查询、容器查询与环境感知
- 成熟度 / 来源: 可靠候选
- 原始代表语法: `@media (40rem &lt;= width &lt; 80rem) { ... }`
- 本分类序号：1 / 13
