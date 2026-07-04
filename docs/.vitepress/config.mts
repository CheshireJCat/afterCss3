import { defineConfig } from 'vitepress'
import { enSidebar, zhSidebar } from './sidebar.generated'
import { locales } from '../../scripts/i18n.mjs'

function themeConfig(locale: 'en' | 'zh') {
  const t = locales[locale]
  const isEnglish = locale === 'en'

  return {
    logo: '/mark.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: t.navCapabilities, link: isEnglish ? '/abilities/' : '/zh/abilities/' },
      { text: 'MDN CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { text: 'Can I Use', link: 'https://caniuse.com/' }
    ],
    sidebar: isEnglish ? enSidebar : zhSidebar,
    outline: {
      level: [2, 3],
      label: t.outline
    },
    docFooter: {
      prev: t.previous,
      next: t.next
    },
    lastUpdated: {
      text: t.lastUpdated,
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/CheshireJCat/afterCss3/edit/main/docs/:path',
      text: t.editThisPage
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CheshireJCat/afterCss3' }
    ],
    footer: {
      message: t.footerMessage,
      copyright: 'MIT'
    }
  }
}

export default defineConfig({
  title: 'After CSS3',
  description: locales.en.description,
  lang: locales.en.lang,
  base: process.env.DOCS_BASE || '/afterCss3/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: themeConfig('en'),
  locales: {
    root: {
      label: locales.en.label,
      lang: locales.en.lang,
      description: locales.en.description
    },
    zh: {
      label: locales.zh.label,
      lang: locales.zh.lang,
      description: locales.zh.description,
      themeConfig: themeConfig('zh')
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: []
  }
})
