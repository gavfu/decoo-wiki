
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/blog',
  component: ComponentCreator('/blog','c36'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','9ec'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','e46'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','b33'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','1ea'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','e8d'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c23'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','378'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','1a9'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','2d8'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','546'),
  exact: true,
},
{
  path: '/markdown-features',
  component: ComponentCreator('/markdown-features','b1f'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
