// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Student Resource Center',
  tagline: 'Find tools and tips to help you to achive your maximum potential while in school or university',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Student Resource Center',
        logo: {
          alt: 'Find tools and tips to help you to achive your maximum potential while in school or university.',
          src: 'img/logo.svg',
        },
        items: [
          
          {to: '/College', label: 'College Applications', position: 'left'},

          {to: '/Markdown-page', label: ' Studet Resourcses ', position: 'left'},

          {
            href: 'https://github.com/Captainflight/Tech-Fair-2022',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {

          },
          {
            title: 'Links to Resources', // Insert resource name here and link to it downbelow
            items: [
              {
                label: ' Resources',
                to: '/Sources-Used', 
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/Captainflight/Tech-Fair-2022',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SRC 2022 TechFair, Inc. Built with Docusaurus. Notice •	The online assets used in this site were found in the public domain and are publicly available for all to see and use with or without the site and we strongly encourage users to continue and support the people who put their time and effort into creating these study materials`,
        
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
