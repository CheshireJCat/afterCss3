# Fallback positioning

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40position-try%20CSS" caniuse="https://caniuse.com/?search=%40position-try" status="Anchor Positioning" label="参考链接" />

## 简明说明

浮层碰撞时自动翻转/改位。

## 代表语法

```css
@position-try --flip { position-area: top; } position-try: --flip;
```

## Demo 演示

<CssDemo title="Fallback positioning" code="@position-try --flip { position-area: top; } position-try: --flip;" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「浮层碰撞时自动翻转/改位。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 布局、定位与阅读顺序
- 成熟度 / 来源: Anchor Positioning
- 原始代表语法: `@position-try --flip { position-area: top; } position-try: --flip;`
- 本分类序号：12 / 16
