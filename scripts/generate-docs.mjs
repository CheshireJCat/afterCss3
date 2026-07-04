import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dataPath = path.join(root, 'data/abilities.json')
const docsDir = path.join(root, 'docs')
const abilitiesDir = path.join(docsDir, 'abilities')
const sidebarPath = path.join(docsDir, '.vitepress/sidebar.generated.ts')

const categories = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;')
}

function oneLine(value) {
  return String(value).replace(/\s+/g, ' ').trim()
}

function write(file, content) {
  ensureDir(path.dirname(file))
  fs.writeFileSync(file, content, 'utf8')
}

function itemUrl(category, item) {
  return `/abilities/${category.slug}/${item.slug}`
}

function categoryUrl(category) {
  return `/abilities/${category.slug}/`
}

function featurePage(category, item, index, total) {
  const demoCode = escapeAttr(item.demo)
  const syntax = escapeHtml(item.syntax)
  return `# ${item.name}

<FeatureLinks mdn="${escapeAttr(item.mdn)}" caniuse="${escapeAttr(item.caniuse)}" status="${escapeAttr(item.status)}" />

## 简明说明

${item.summary}

## 代表语法

\`\`\`css
${item.syntax}
\`\`\`

## Demo 演示

<CssDemo title="${escapeAttr(item.name)}" code="${demoCode}" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「${oneLine(item.summary)}」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 \`@supports\`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：${category.title}
- 成熟度 / 来源：${item.status}
- 原始代表语法：\`${syntax}\`
- 本分类序号：${index + 1} / ${total}
`
}

function categoryPage(category) {
  const links = category.items
    .map((item) => `- [${item.name}](${item.slug}.md) — ${item.summary}`)
    .join('\n')
  return `# ${category.title}

这个分类包含 ${category.items.length} 个能力条目。每个条目都包含简明说明、MDN 入口、Can I Use 入口和可运行/可阅读的 demo。

${links}
`
}

function homePage() {
  const featureCount = categories.reduce((sum, category) => sum + category.items.length, 0)
  const categoryCards = categories
    .map((category) => {
      const first = category.items.slice(0, 3).map((item) => item.name).join('、')
      return `<a href="abilities/${category.slug}/"><strong>${category.title}</strong><span>${category.items.length} 项能力：${escapeHtml(first)}${category.items.length > 3 ? '…' : ''}</span></a>`
    })
    .join('\n')

  return `---
layout: home

hero:
  name: After CSS3
  text: 新 CSS 能力导航
  tagline: 从 CSS3 之后的模块化演进里，把可用能力、草案方向、MDN 与 Can I Use 入口整理成一份可查的轻文档。
  actions:
    - theme: brand
      text: 浏览能力导航
      link: /abilities/
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/CheshireJCat/afterCss3
---

<div class="hero-grid">
  <div class="hero-copy">
    <p>当前迁移 ${categories.length} 个分类、${featureCount} 个能力条目。左侧导航按能力域分组；每个条目页固定包含说明、MDN、demo 和 Can I Use 兼容性入口。</p>
    <div class="hero-actions">
      <a href="abilities/">开始查阅</a>
      <a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I Use</a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">MDN CSS</a>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true">
    <span class="orb"></span>
    <span class="orb"></span>
    <span class="orb"></span>
  </div>
</div>

## 分类索引

<div class="category-index">
${categoryCards}
</div>
`
}

function abilitiesIndexPage() {
  const groups = categories
    .map((category) => {
      const links = category.items
        .slice(0, 8)
        .map((item) => `  - [${item.name}](${category.slug}/${item.slug}.md)`)
        .join('\n')
      return `## [${category.title}](${category.slug}/index.md)

共 ${category.items.length} 项。

${links}
${category.items.length > 8 ? `  - [查看全部 ${category.items.length} 项](${category.slug}/index.md)` : ''}
`
    })
    .join('\n')

  return `# 新 CSS 能力导航

这里按能力域组织 CSS3 之后的新 CSS 能力。左侧侧边栏是完整导航，正文先给每个分类的快速入口。

${groups}
`
}

function sidebarFile() {
  const groups = [
    {
      text: '总览',
      items: [
        { text: '首页', link: '/' },
        { text: '能力导航', link: '/abilities/' }
      ]
    },
    ...categories.map((category) => ({
      text: category.title,
      collapsed: false,
      items: [
        { text: '分类概览', link: categoryUrl(category) },
        ...category.items.map((item) => ({
          text: item.name,
          link: itemUrl(category, item)
        }))
      ]
    }))
  ]

  return `export const sidebar = ${JSON.stringify(groups, null, 2)}\n`
}

function run() {
  fs.rmSync(abilitiesDir, { recursive: true, force: true })
  ensureDir(abilitiesDir)

  write(path.join(docsDir, 'index.md'), homePage())
  write(path.join(abilitiesDir, 'index.md'), abilitiesIndexPage())
  write(sidebarPath, sidebarFile())

  for (const category of categories) {
    const categoryDir = path.join(abilitiesDir, category.slug)
    write(path.join(categoryDir, 'index.md'), categoryPage(category))
    category.items.forEach((item, index) => {
      write(
        path.join(categoryDir, `${item.slug}.md`),
        featurePage(category, item, index, category.items.length)
      )
    })
  }

  console.log(`generated ${categories.length} categories and ${categories.reduce((sum, c) => sum + c.items.length, 0)} feature pages`)
}

run()
