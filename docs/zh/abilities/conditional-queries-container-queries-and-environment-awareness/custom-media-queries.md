# 自定义媒体查询

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40custom-media%20CSS" caniuse="https://caniuse.com/?search=%40custom-media" status="Media Queries 5 草案" label="参考链接" />

## 简明说明

把常用媒体条件命名复用。

## 代表语法

```css
@custom-media --narrow (width < 40rem);
```

## Demo 演示

<CssDemo title="自定义媒体查询" code="@custom-media --narrow (width &lt; 40rem);" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「把常用媒体条件命名复用。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 条件查询、容器查询与环境感知
- 成熟度 / 来源: Media Queries 5 草案
- 原始代表语法: `@custom-media --narrow (width &lt; 40rem);`
- 本分类序号：12 / 13
