import { format } from 'date-fns'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'path',
      type: 'url',
      title: 'URL Path',
      description: 'Some frontends will require a path to be set to be able to show the post',
      validation: Rule =>
        Rule.uri({
          allowRelative: true
        })
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Default Heading'
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string'
    },
    {
      name: 'heroBgImage',
      title: 'Hero Background Image',
      type: 'image'
    },
    {
      name: 'heroMediaPosition',
      title: 'Hero Media Position',
      type: 'string',
      options: {
        list: ['left', 'right']
      }
    },
    {
      name: 'heroMedia',
      title: 'Hero Featured Media',
      type: 'reference',
      to: [{ type: 'mainImage' }, { type: 'video' }]
    },
    {
      name: 'heroCta',
      title: 'Hero Call to Action',
      type: 'menuItem'
    },
    {
      name: 'content',
      title: 'Default Content',
      type: 'array',
      description: 'Default content when the page has no sections other than a hero.',
      of: [{ type: 'block' }]
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [{ type: 'pageSection' }]
    },
    {
      name: 'metaImage',
      type: 'accessibleImage',
      title: 'SEO OpenGraph Image'
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
  initialValue: {
    heroMediaPosition: 'right'
  }
}
