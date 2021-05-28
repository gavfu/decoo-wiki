
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','6dd'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d86'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','9f7'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a27'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','a90'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','ae6'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','09f'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','5b3'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c45'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','534'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','77c'),
  exact: true,
},
{
  path: '/general/api-keys',
  component: ComponentCreator('/general/api-keys','6f8'),
  exact: true,
},
{
  path: '/general/faq',
  component: ComponentCreator('/general/faq','ffe'),
  exact: true,
},
{
  path: '/general/getting-started',
  component: ComponentCreator('/general/getting-started','d91'),
  exact: true,
},
{
  path: '/markdown-features',
  component: ComponentCreator('/markdown-features','b1f'),
  exact: true,
},
{
  path: '/pinning-services-api',
  component: ComponentCreator('/pinning-services-api','8dd'),
  exact: true,
},
{
  path: '/pinning/pin-by-hash',
  component: ComponentCreator('/pinning/pin-by-hash','5e1'),
  exact: true,
},
{
  path: '/pinning/pin-file',
  component: ComponentCreator('/pinning/pin-file','d78'),
  exact: true,
},
{
  path: '/pinning/pin-jobs',
  component: ComponentCreator('/pinning/pin-jobs','891'),
  exact: true,
},
{
  path: '/pinning/pin-list',
  component: ComponentCreator('/pinning/pin-list','633'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
