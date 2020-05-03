
export default {
  name: 'partner',
  type: 'document',
  title: 'Partners',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the partner'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'the url slug for the partner\'s page',
      options: {
        source: 'name',
        maxLength: 32
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [],
  preview: {
    select: {
      title: 'name',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      // const dateSegment = format(publishedAt, 'YYYY/MM')
      // const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media
      }
    }
  }
}
