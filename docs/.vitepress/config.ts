import { defineConfig, defineConfigWithTheme } from "vitepress";
import sidebar from "./sidebar";
import { markdownConfig } from "./plugins/markdown-plugin";
import navbar from "./navbar";

// https://vitepress.dev/reference/site-config
defineConfigWithTheme;
export default defineConfig({
  title: "My Blog Docs",
  description: "A VitePress Site",
  markdown: {
    config: markdownConfig,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/joywins-y/blog-docs" },
    ],

    langMenuLabel: "Change language",

    // 设置页脚
    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2023-present Joy",
    },

    // 编辑链接
    editLink: {
      pattern: "https://github.com/joywins-y/blog-docs/blob/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    // 显示文本最后更新时间
    lastUpdatedText: "Update Date",

    // 文档页脚 显示上一个链接和下一个链接文本
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },

    // 表示docs/public/logo.png
    logo: "/logo.png",

    // 开启搜索 参考：https://vitepress.dev/reference/default-theme-search#search
    search: {
      provider: "local",
    },

    // 开启右侧文章内的标题目录
    outline: {
      level: [2, 6], // 配置h2-h6级的标题，默认只展示h2
      label: "目录",
    },
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en",
    },
  },
  lastUpdated: true,
  base: "/blog-docs/",
  head: [
    // 增加一个自定义的 favicon
    ["link", { rel: "icon", href: "logo.png", crossorigin: "" }],
    ["link", { rel: "ico", href: "/favicon.ico", crossorigin: "" }],
  ],
  ignoreDeadLinks: true,
});
