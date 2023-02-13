import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ba2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd42'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c55'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '808'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '76d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2fa'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a20'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '378'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'daf'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '675'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ffc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '772'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '951'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f72'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8ee'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4f3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'dc7'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '803'),
    routes: [
      {
        path: '/docs/next/category/npm-modules',
        component: ComponentCreator('/docs/next/category/npm-modules', 'e04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/category/website-fetching',
        component: ComponentCreator('/docs/next/category/website-fetching', 'bab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/intro',
        component: ComponentCreator('/docs/next/intro', '8d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/NPM Modules/viper.js',
        component: ComponentCreator('/docs/next/NPM Modules/viper.js', 'bad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/Website-Fetching/bot',
        component: ComponentCreator('/docs/next/Website-Fetching/bot', '10d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/Website-Fetching/Vote',
        component: ComponentCreator('/docs/next/Website-Fetching/Vote', '4bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '065'),
    routes: [
      {
        path: '/docs/category/npm-modules',
        component: ComponentCreator('/docs/category/npm-modules', '3a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/website-fetching',
        component: ComponentCreator('/docs/category/website-fetching', '1bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '029'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/NPM Modules/viper.js',
        component: ComponentCreator('/docs/NPM Modules/viper.js', 'a6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Website-Fetching/bot',
        component: ComponentCreator('/docs/Website-Fetching/bot', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Website-Fetching/Vote',
        component: ComponentCreator('/docs/Website-Fetching/Vote', '17e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e2b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
