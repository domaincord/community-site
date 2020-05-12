export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'postType',
      type: 'string',
      title: 'Post Type',
      options: {
        list: [
          {
            title: 'Blog Post',
            value: 'blog'
          },
          {
            title: 'Wiki Page',
            value: 'wiki'
          },
          {
            title: 'Resource',
            value: 'resources'
          }
        ]
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      name: 'image',
      type: 'accessibleImage',
      title: 'Main image'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      styles: []
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'profile'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }]
    },
    {
      title: 'Video',
      name: 'video',
      type: 'reference',
      to: [{ type: 'video' }]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
        baseUrl: 'https://domaincord.org/', // (REQUIRED) This is the baseUrl for your site
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return 'simple html representation of your doc' // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return 'page title' // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return 'page description' // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return 'page locale' // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'accessibleImage',
      postType: 'postType'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media, postType }) {
      const path = `/${postType}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
