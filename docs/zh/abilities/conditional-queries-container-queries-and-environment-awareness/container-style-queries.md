# Container style queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries" caniuse="https://caniuse.com/?search=%40container" status="Baseline 2026" label="参考链接" />

## 简明说明

根据容器已计算样式或 custom property 分支。

## 代表语法

```css
@container style(--theme: dark) { ... }
```

## Demo 演示

<CssDemo title="Container style queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「根据容器已计算样式或 custom property 分支。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 条件查询、容器查询与环境感知
- 成熟度 / 来源: Baseline 2026
- 原始代表语法: `@container style(--theme: dark) { ... }`
- 本分类序号：7 / 13
