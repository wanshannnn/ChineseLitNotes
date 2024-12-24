import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ChineseLitNotes',
  tagline: '给中文系学生的电子口袋书',
  /*
  项目图标，有待设计
  favicon: 'img/favicon.ico',
   */

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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /*
    首页图片，有待设计
    image: 'img/docusaurus-social-card.jpg',
     */
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
          label: '古代文学',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar6',
          position: 'left',
          label: '交流区',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar7',
          position: 'left',
          label: '关于我们',
        },
        {
          href: 'https://github.com/wanshannnn/ChineseLitNotes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
