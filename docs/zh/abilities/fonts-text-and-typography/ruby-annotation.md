# Ruby annotation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Ruby%20annotation%20CSS" caniuse="https://caniuse.com/?search=Ruby%20annotation" status="Ruby 1" label="参考链接" />

## 简明说明

日文/中文拼音、注音、旁注布局。

## 代表语法

```css
ruby-position, ruby-align, ruby-merge
```

## Demo 演示

<CssDemo title="Ruby annotation" code=".target {
  /* ruby-position, ruby-align, ruby-merge */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「日文/中文拼音、注音、旁注布局。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 字体、文字与排版
- 成熟度 / 来源: Ruby 1
- 原始代表语法: `ruby-position, ruby-align, ruby-merge`
- 本分类序号：16 / 18
