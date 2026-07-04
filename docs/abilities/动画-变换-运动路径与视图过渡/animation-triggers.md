# Animation triggers

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Animation%20triggers%20CSS" caniuse="https://caniuse.com/?search=Animation%20triggers" status="草案" />

## 简明说明

用状态/事件触发动画，而非只靠时间轴。

## 代表语法

```css
animation-trigger, trigger-exit 等
```

## Demo 演示

<CssDemo title="Animation triggers" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「用状态/事件触发动画，而非只靠时间轴。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：动画、变换、运动路径与视图过渡
- 成熟度 / 来源：草案
- 原始代表语法：`animation-trigger, trigger-exit 等`
- 本分类序号：13 / 14
