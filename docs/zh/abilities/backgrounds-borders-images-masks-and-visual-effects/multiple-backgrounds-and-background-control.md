# 多背景与背景控制

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%A4%9A%E8%83%8C%E6%99%AF%E4%B8%8E%E8%83%8C%E6%99%AF%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=%E5%A4%9A%E8%83%8C%E6%99%AF%E4%B8%8E%E8%83%8C%E6%99%AF%E6%8E%A7%E5%88%B6" status="Backgrounds 3" label="参考链接" />

## 简明说明

多个背景层、裁剪、定位和尺寸控制。

## 代表语法

```css
background-size, background-origin, background-clip, multiple backgrounds
```

## Demo 演示

<CssDemo title="多背景与背景控制" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「多个背景层、裁剪、定位和尺寸控制。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源: Backgrounds 3
- 原始代表语法: `background-size, background-origin, background-clip, multiple backgrounds`
- 本分类序号：1 / 15
