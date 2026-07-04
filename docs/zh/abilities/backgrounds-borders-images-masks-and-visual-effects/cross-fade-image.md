# cross-fade()/image()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=cross-fade%28%29%2Fimage%28%29%20CSS" caniuse="https://caniuse.com/?search=background" status="Images 4/5" label="参考链接" />

## 简明说明

CSS 内部图像混合、fallback 和方向性图像。

## 代表语法

```css
background: cross-fade(url(a), url(b) 50%);
```

## Demo 演示

<CssDemo title="cross-fade()/image()" code=".target {
  /* background: cross-fade(url(a), url(b) 50%); */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「CSS 内部图像混合、fallback 和方向性图像。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源: Images 4/5
- 原始代表语法: `background: cross-fade(url(a), url(b) 50%);`
- 本分类序号：4 / 15
