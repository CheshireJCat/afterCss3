# Discrete transitions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Discrete%20transitions%20CSS" caniuse="https://caniuse.com/?search=transition-behavior" status="Transitions 2" label="参考链接" />

## 简明说明

display、overlay 等离散值也可参与过渡。

## 代表语法

```css
transition-behavior: allow-discrete;
```

## Demo 演示

<CssDemo title="Discrete transitions" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「display、overlay 等离散值也可参与过渡。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 动画、变换、运动路径与视图过渡
- 成熟度 / 来源: Transitions 2
- 原始代表语法: `transition-behavior: allow-discrete;`
- 本分类序号：6 / 14
