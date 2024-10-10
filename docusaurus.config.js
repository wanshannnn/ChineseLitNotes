// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChineseLitNotes',
  tagline: '给中文系学生的电子口袋书',

  url: 'https://wanshannnn.github.io',
  baseUrl: '/ChineseLitNotes',

  organizationName: 'wanshannnn',
  projectName: 'ChineseLitNotes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  scripts: [
    {
      src: 'https://unpkg.com/valine/dist/Valine.min.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ChineseLitNotes',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar1',
            position: 'left',
            label: '现代文学',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar2',
            position: 'left',
            label: '当代文学',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar3',
            position: 'left',
            label: '现代汉语',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar4',
            position: 'left',
            label: '公文写作',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar5',
            position: 'left',
            label: '交流区',
          },
          {
            href: 'https://github.com/wanshannnn/ChineseLitNotes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ChineseLitNotes. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;