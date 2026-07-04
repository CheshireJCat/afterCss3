# CSS Image Animation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=CSS%20Image%20Animation%20CSS" caniuse="https://caniuse.com/?search=CSS%20Image%20Animation" status="Image Animation 1 草案" />

## 简明说明

控制动画图像格式播放和首帧等行为。

## 代表语法

```css
image animation controls
```

## Demo 演示

<CssDemo title="CSS Image Animation" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「控制动画图像格式播放和首帧等行为。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源：Image Animation 1 草案
- 原始代表语法：`image animation controls`
- 本分类序号：14 / 15
