# Font Loading API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Font%20Loading%20API%20CSS" caniuse="https://caniuse.com/?search=Font%20Loading%20API" status="Font Loading 3" label="参考链接" />

## 简明说明

脚本控制字体加载和字体集合状态。

## 代表语法

```css
document.fonts.load(...)
```

## Demo 演示

<CssDemo title="Font Loading API" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「脚本控制字体加载和字体集合状态。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: CSS 相关 Web APIs 与 Houdini 能力
- 成熟度 / 来源: Font Loading 3
- 原始代表语法: `document.fonts.load(...)`
- 本分类序号：5 / 11
