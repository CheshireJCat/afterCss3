# Shapes and exclusions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Shapes%20and%20exclusions%20CSS" caniuse="https://caniuse.com/?search=shape-outside" status="Shapes 1/2、Exclusions 草案" label="参考链接" />

## 简明说明

非矩形文字环绕、复杂浮动区域。

## 代表语法

```css
shape-outside: circle(); shape-margin: 1rem;
```

## Demo 演示

<CssDemo title="Shapes and exclusions" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「非矩形文字环绕、复杂浮动区域。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 布局、定位与阅读顺序
- 成熟度 / 来源: Shapes 1/2、Exclusions 草案
- 原始代表语法: `shape-outside: circle(); shape-margin: 1rem;`
- 本分类序号：14 / 16
