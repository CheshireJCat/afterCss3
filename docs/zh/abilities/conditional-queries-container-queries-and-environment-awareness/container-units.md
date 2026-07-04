# 容器单位

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units" caniuse="https://caniuse.com/?search=%E5%AE%B9%E5%99%A8%E5%8D%95%E4%BD%8D" status="Contain/Values" label="参考链接" />

## 简明说明

直接以查询容器尺寸计算值。

## 代表语法

```css
cqw, cqh, cqi, cqb, cqmin, cqmax
```

## Demo 演示

<CssDemo title="容器单位" code=".target {
  /* cqw, cqh, cqi, cqb, cqmin, cqmax */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「直接以查询容器尺寸计算值。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 条件查询、容器查询与环境感知
- 成熟度 / 来源: Contain/Values
- 原始代表语法: `cqw, cqh, cqi, cqb, cqmin, cqmax`
- 本分类序号：9 / 13
