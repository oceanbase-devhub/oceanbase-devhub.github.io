import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OceanBase Devhub',
  tagline: 'OceanBase Devhub',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://oceanbase-devhub.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oceanbase-devhub', // Usually your GitHub org/user name.
  projectName: 'oceanbase-devhub.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/oceanbase-logo.png',
    navbar: {
      title: 'OceanBase Devhub',
      logo: {
        alt: 'OceanBase Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'AI Workshops',
          position: 'left',
          items: [
            {
              label: 'RAG Bot',
              href: 'https://oceanbase-devhub.github.io/ai-workshop-2024',
            },
            {
              label: 'Dify (MySQL Compatible)',
              href: 'https://oceanbase-devhub.github.io/dify/dify@oceanbase-workshop',
            },
            {
              label: 'DB-GPT',
              href: 'https://oceanbase-devhub.github.io/DB-GPT/docker/compose_examples/ob_dbgpt_tutorial',
            },
          ],
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/oceanbase-devhub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'AI Workshops',
          items: [
            {
              label: 'RAG Bot',
              href: 'https://oceanbase-devhub.github.io/ai-workshop-2024',
            },
            {
              label: 'Dify (MySQL Compatible)',
              href: 'https://oceanbase-devhub.github.io/dify/dify@oceanbase-workshop.md',
            },
            {
              label: 'DB-GPT',
              href: 'https://oceanbase-devhub.github.io/DB-GPT/docker/compose_examples/ob_dbgpt_tutorial',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'RAG Bot',
              href: 'https://github.com/oceanbase-devhub/ai-workshop-2024',
            },
            {
              label: 'Image Search',
              href: 'https://github.com/oceanbase-devhub/image-search',
            },
            {
              label: 'Dify (MySQL Compatible)',
              href: 'https://github.com/oceanbase-devhub/dify',
            },
            {
              label: 'DB-GPT',
              href: 'https://github.com/oceanbase-devhub/DB-GPT',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussion',
              href: 'http://github.com/oceanbase/oceanbase/discussions',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/oceanbase/shared_invite/zt-1e25oz3ol-lJ6YNqPHaKwY_mhhioyEuw',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/oceanbase',
            },
            {
              label: 'Forum (in Chinese)',
              href: 'https://ask.oceanbase.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About OceanBase',
              href: 'https://en.oceanbase.com/about',
            },
            {
              label: 'Blogs',
              to: 'https://oceanbase.github.io/docs/blogs/arch/all-in-one',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/oceanbase/oceanbase',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OceanBase, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
