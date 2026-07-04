# Overscroll behavior

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Overscroll%20behavior%20CSS" caniuse="https://caniuse.com/?search=overscroll-behavior" status="Overscroll 1" label="参考链接" />

## 简明说明

控制滚动边界链式传播和系统回弹。

## 代表语法

```css
overscroll-behavior: contain;
```

## Demo 演示

<CssDemo title="Overscroll behavior" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「控制滚动边界链式传播和系统回弹。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 滚动、溢出与滚动型组件
- 成熟度 / 来源: Overscroll 1
- 原始代表语法: `overscroll-behavior: contain;`
- 本分类序号：3 / 10
