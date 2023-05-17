import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    langMenuLabel: 'Change language',

    // 设置页脚
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  
    // 显示文本最后更新时间
    lastUpdatedText: 'Update Date',

    // 文档页脚 显示上一个链接和下一个链接文本
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en'
    }
  },
  lastUpdated: true,
})
