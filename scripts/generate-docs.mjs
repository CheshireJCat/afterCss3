import fs from 'node:fs'
import path from 'node:path'
import { buildDemo, buildUsage } from './content-enhancements.mjs'
import { locales, localizeCategory, localizeItem } from './i18n.mjs'

const root = process.cwd()
const dataPath = path.join(root, 'data/abilities.json')
const docsDir = path.join(root, 'docs')
const sidebarPath = path.join(docsDir, '.vitepress/sidebar.generated.ts')

const sourceCategories = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const localeOrder = ['en', 'zh']

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

function encodeBase64(value) {
  return Buffer.from(String(value), 'utf8').toString('base64')
}

function oneLine(value) {
  return String(value).replace(/\s+/g, ' ').trim()
}

function write(file, content) {
  ensureDir(path.dirname(file))
  fs.writeFileSync(file, content, 'utf8')
}

function localeRoot(locale) {
  return locale === 'en' ? docsDir : path.join(docsDir, locale)
}

function localePrefix(locale) {
  return locale === 'en' ? '' : `/${locale}`
}

function localizeCategories(locale) {
  return sourceCategories.map((category) => {
    const localizedCategory = localizeCategory(category, locale)
    return {
      ...localizedCategory,
      items: category.items.map((item) => localizeItem(item, locale))
    }
  })
}

function itemUrl(locale, category, item) {
  return `${localePrefix(locale)}/abilities/${category.slug}/${item.slug}`
}

function categoryUrl(locale, category) {
  return `${localePrefix(locale)}/abilities/${category.slug}/`
}

function featurePage(locale, category, item, index, total) {
  const t = locales[locale]
  const demo = buildDemo(locale, category, item)
  const usage = buildUsage(locale, category, item)
  const syntax = escapeHtml(item.syntax)
  const usageCards = usage
    .map((entry) => `<section>
  <h3>${escapeHtml(entry.heading)}</h3>
  <p>${escapeHtml(entry.body)}</p>
</section>`)
    .join('\n')

  return `# ${item.name}

<FeatureLinks mdn="${escapeAttr(item.mdn)}" caniuse="${escapeAttr(item.caniuse)}" status="${escapeAttr(item.status)}" label="${escapeAttr(t.referenceLinks)}" />

## ${t.summary}

${item.summary}

## ${t.syntax}

\`\`\`css
${item.syntax}
\`\`\`

## ${t.demo}

<CssDemo title="${escapeAttr(item.name)}" css-b64="${encodeBase64(demo.css)}" code-b64="${encodeBase64(demo.code)}" html-b64="${encodeBase64(demo.html)}" caption="${escapeAttr(demo.caption)}" lang="${escapeAttr(t.lang)}" badge="${escapeAttr(demo.badge)}" />

## ${t.whenToUse}

<div class="usage-grid">
${usageCards}
</div>

## ${t.source}

- ${t.category}: ${category.title}
- ${t.status}: ${item.status}
- ${t.originalSyntax}: \`${syntax}\`
- ${t.categoryPosition(index, total)}
`
}

function categoryPage(locale, category) {
  const t = locales[locale]
  const links = category.items
    .map((item) => `- [${item.name}](${item.slug}.md) - ${item.summary}`)
    .join('\n')

  return `# ${category.title}

${t.contains(category.items.length)}

${links}
`
}

function homePage(locale, categories) {
  const t = locales[locale]
  const featureCount = categories.reduce((sum, category) => sum + category.items.length, 0)
  const languageHref = locale === 'en' ? 'zh/' : '../'
  const categoryCards = categories
    .map((category) => {
      const first = category.items.slice(0, 3).map((item) => item.name).join(locale === 'en' ? ', ' : '、')
      const suffix = category.items.length > 3 ? '...' : ''
      return `<a href="abilities/${category.slug}/"><strong>${category.title}</strong><span>${t.itemCount(category.items.length)}: ${escapeHtml(first)}${suffix}</span></a>`
    })
    .join('\n')

  return `---
layout: home

hero:
  name: After CSS3
  text: ${t.heroText}
  tagline: ${t.tagline}
  actions:
    - theme: brand
      text: ${t.browse}
      link: ${localePrefix(locale)}/abilities/
    - theme: alt
      text: ${t.github}
      link: https://github.com/CheshireJCat/afterCss3
---

<div class="hero-grid">
  <div class="hero-copy">
    <p>${t.intro(categories.length, featureCount)}</p>
    <div class="hero-actions">
      <a href="abilities/">${t.start}</a>
      <a href="${languageHref}">${t.navLanguage}</a>
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

## ${t.categoryIndex}

<div class="category-index">
${categoryCards}
</div>
`
}

function abilitiesIndexPage(locale, categories) {
  const t = locales[locale]
  const groups = categories
    .map((category) => {
      const links = category.items
        .slice(0, 8)
        .map((item) => `  - [${item.name}](${category.slug}/${item.slug}.md)`)
        .join('\n')

      return `## [${category.title}](${category.slug}/index.md)

${t.total(category.items.length)}

${links}
${category.items.length > 8 ? `  - [${t.viewAll(category.items.length)}](${category.slug}/index.md)` : ''}
`
    })
    .join('\n')

  return `# ${t.abilitiesTitle}

${t.abilitiesIntro}

${groups}
`
}

function sidebarGroups(locale, categories) {
  const t = locales[locale]
  return [
    {
      text: t.overview,
      items: [
        { text: t.home, link: `${localePrefix(locale)}/` },
        { text: t.navCapabilities, link: `${localePrefix(locale)}/abilities/` }
      ]
    },
    ...categories.map((category) => ({
      text: category.title,
      collapsed: false,
      items: [
        { text: t.categoryOverview, link: categoryUrl(locale, category) },
        ...category.items.map((item) => ({
          text: item.name,
          link: itemUrl(locale, category, item)
        }))
      ]
    }))
  ]
}

function sidebarFile(sidebars) {
  return `export const enSidebar = ${JSON.stringify(sidebars.en, null, 2)}

export const zhSidebar = ${JSON.stringify(sidebars.zh, null, 2)}
`
}

function cleanGeneratedDocs() {
  fs.rmSync(path.join(docsDir, 'abilities'), { recursive: true, force: true })
  fs.rmSync(path.join(docsDir, 'zh'), { recursive: true, force: true })
}

function writeLocale(locale, categories) {
  const rootDir = localeRoot(locale)
  const abilitiesDir = path.join(rootDir, 'abilities')

  ensureDir(abilitiesDir)
  write(path.join(rootDir, 'index.md'), homePage(locale, categories))
  write(path.join(abilitiesDir, 'index.md'), abilitiesIndexPage(locale, categories))

  for (const category of categories) {
    const categoryDir = path.join(abilitiesDir, category.slug)
    write(path.join(categoryDir, 'index.md'), categoryPage(locale, category))
    category.items.forEach((item, index) => {
      write(
        path.join(categoryDir, `${item.slug}.md`),
        featurePage(locale, category, item, index, category.items.length)
      )
    })
  }
}

function run() {
  cleanGeneratedDocs()

  const localized = Object.fromEntries(
    localeOrder.map((locale) => [locale, localizeCategories(locale)])
  )

  for (const locale of localeOrder) {
    writeLocale(locale, localized[locale])
  }

  write(sidebarPath, sidebarFile({
    en: sidebarGroups('en', localized.en),
    zh: sidebarGroups('zh', localized.zh)
  }))

  const featureCount = sourceCategories.reduce((sum, c) => sum + c.items.length, 0)
  console.log(`generated ${localeOrder.length} locales, ${sourceCategories.length} categories, and ${featureCount} feature pages per locale`)
}

run()
