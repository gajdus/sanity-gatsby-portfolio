export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d235803c18cd31038b1943f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e5v6gak7',
                  apiId: '77a6eccb-bf80-43ea-8a8a-230fe0b44754'
                },
                {
                  buildHookId: '5d2358049c136e48bb4b5931',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ae83c37y',
                  apiId: '1e497d20-9c15-4fcf-bdfb-2c2067d9030f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gajdus/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ae83c37y.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
