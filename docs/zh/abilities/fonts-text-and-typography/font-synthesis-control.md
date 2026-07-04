# 字体合成控制

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E5%90%88%E6%88%90%E6%8E%A7%E5%88%B6%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E5%90%88%E6%88%90%E6%8E%A7%E5%88%B6" status="Fonts 4" label="参考链接" />

## 简明说明

控制浏览器是否合成粗体、斜体、小型大写等。

## 代表语法

```css
font-synthesis, font-synthesis-weight/style/small-caps/position
```

## Demo 演示

<CssDemo title="字体合成控制" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「控制浏览器是否合成粗体、斜体、小型大写等。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 字体、文字与排版
- 成熟度 / 来源: Fonts 4
- 原始代表语法: `font-synthesis, font-synthesis-weight/style/small-caps/position`
- 本分类序号：6 / 18
