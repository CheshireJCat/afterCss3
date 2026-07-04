import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.generated'

export default defineConfig({
  title: 'After CSS3',
  description: 'CSS3 之后的新 CSS 能力导航、说明、Demo 与兼容性入口',
  lang: 'zh-CN',
  base: process.env.DOCS_BASE || '/afterCss3/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/mark.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '能力导航', link: '/abilities/' },
      { text: 'MDN CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { text: 'Can I Use', link: 'https://caniuse.com/' }
    ],
    sidebar,
    outline: {
      level: [2, 3],
      label: '本页'
    },
    docFooter: {
      prev: '上一项',
      next: '下一项'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/CheshireJCat/afterCss3/edit/main/docs/:path',
      text: '在 GitHub 编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CheshireJCat/afterCss3' }
    ],
    footer: {
      message: 'Built with VitePress. Data migrated from the CSS3-after capability document.',
      copyright: 'MIT'
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
