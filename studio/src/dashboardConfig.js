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
                  buildHookId: '5eac5da90fc184744a452481',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jvoe98r8',
                  apiId: 'b708198e-a27c-409d-942d-80ff3f4b5394'
                },
                {
                  buildHookId: '5eac5daa56c65e6e55102612',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2ykphnv9',
                  apiId: '1efdc538-4550-4c01-80ed-d8640e957ad8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crock/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2ykphnv9.netlify.app', category: 'apps' }
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
