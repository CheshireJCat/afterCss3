# Motion path

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Motion%20path%20CSS" caniuse="https://caniuse.com/?search=Motion%20path" status="Motion Path 1" label="参考链接" />

## 简明说明

沿路径定位和动画。

## 代表语法

```css
offset-path, offset-distance, offset-rotate, offset-anchor
```

## Demo 演示

<CssDemo title="Motion path" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「沿路径定位和动画。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 动画、变换、运动路径与视图过渡
- 成熟度 / 来源: Motion Path 1
- 原始代表语法: `offset-path, offset-distance, offset-rotate, offset-anchor`
- 本分类序号：4 / 14
