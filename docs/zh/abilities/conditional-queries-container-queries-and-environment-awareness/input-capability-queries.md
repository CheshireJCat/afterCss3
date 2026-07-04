# 输入能力查询

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E8%BE%93%E5%85%A5%E8%83%BD%E5%8A%9B%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E8%BE%93%E5%85%A5%E8%83%BD%E5%8A%9B%E6%9F%A5%E8%AF%A2" status="Media Queries 4" label="参考链接" />

## 简明说明

根据鼠标/触控/笔等交互能力调整 UI。

## 代表语法

```css
hover, pointer, any-hover, any-pointer
```

## Demo 演示

<CssDemo title="输入能力查询" code=".target {
  /* hover, pointer, any-hover, any-pointer */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「根据鼠标/触控/笔等交互能力调整 UI。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 条件查询、容器查询与环境感知
- 成熟度 / 来源: Media Queries 4
- 原始代表语法: `hover, pointer, any-hover, any-pointer`
- 本分类序号：2 / 13
