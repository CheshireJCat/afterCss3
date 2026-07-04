# object-fit/object-position

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=object-fit%2Fobject-position%20CSS" caniuse="https://caniuse.com/?search=object-fit" status="Images/Replaced elements" />

## 简明说明

替代背景图 hack 控制替换元素裁剪。

## 代表语法

```css
object-fit: cover; object-position: 50% 20%;
```

## Demo 演示

<CssDemo title="object-fit/object-position" code=".target {
  /* object-fit: cover; object-position: 50% 20%; */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「替代背景图 hack 控制替换元素裁剪。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源：Images/Replaced elements
- 原始代表语法：`object-fit: cover; object-position: 50% 20%;`
- 本分类序号：5 / 15
