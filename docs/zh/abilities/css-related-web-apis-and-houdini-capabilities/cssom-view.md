# CSSOM View

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSSOM%20View%20CSS" caniuse="https://caniuse.com/?search=ect%28%29" status="CSSOM View" label="参考链接" />

## 简明说明

视口、滚动、布局盒查询。

## 代表语法

```css
getBoundingClientRect(), scrollIntoView(), visualViewport
```

## Demo 演示

<CssDemo title="CSSOM View" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「视口、滚动、布局盒查询。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: CSS 相关 Web APIs 与 Houdini 能力
- 成熟度 / 来源: CSSOM View
- 原始代表语法: `getBoundingClientRect(), scrollIntoView(), visualViewport`
- 本分类序号：2 / 11
