export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602ffac27fc3e009f8d2d03b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z71ivtbm',
                  apiId: '7f7d6968-135c-4701-ac71-c1a1d9b37842'
                },
                {
                  buildHookId: '602ffac37d0a8e0b97bd479e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5kqw4k5p',
                  apiId: '8944a30a-1610-4e81-a258-6735a136b20f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MOUKZ/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5kqw4k5p.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
