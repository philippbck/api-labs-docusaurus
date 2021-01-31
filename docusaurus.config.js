module.exports = {
  title: 'API-Labs',
  tagline: 'The tagline of my site',
  url: 'https://api-labs.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'philippbck',
  projectName: 'api-labs-blog',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'API-Labs Logo',
        src: 'img/api-labs-logo.png',
      },
      items: [
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'right'},
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/6721773/philipp-buck?tab=profile',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/philippbck',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/philippbck',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} API-Labs.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
