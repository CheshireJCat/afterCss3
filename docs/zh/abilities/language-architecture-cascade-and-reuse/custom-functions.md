# 自定义函数

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40function%20CSS" caniuse="https://caniuse.com/?search=%40function" status="Functions and Mixins 草案，部分实现" label="参考链接" />

## 简明说明

原生参数化 value 函数，减少 Sass/工具链依赖。

## 代表语法

```css
@function --space(--n) { result: calc(var(--n) * 4px); }
```

## Demo 演示

<CssDemo title="自定义函数" code="@function --space(--n) { result: calc(var(--n) * 4px); }" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「原生参数化 value 函数，减少 Sass/工具链依赖。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 语言架构、级联与复用
- 成熟度 / 来源: Functions and Mixins 草案，部分实现
- 原始代表语法: `@function --space(--n) { result: calc(var(--n) * 4px); }`
- 本分类序号：10 / 12
