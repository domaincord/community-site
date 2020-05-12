export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'profileType',
      type: 'string',
      title: 'Profile Type',
      options: {
        list: [
          {
            title: 'Author',
            value: 'authors'
          },
          {
            title: 'Member',
            value: 'members'
          },
          {
            title: 'Partner',
            value: 'partners'
          }
        ]
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      styles: []
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 32
      }
    },
    {
      name: 'avatar',
      type: 'accessibleImage',
      title: 'Avatar/Logo'
    },
    {
      name: 'image',
      type: 'accessibleImage',
      title: 'Image',
      description: 'Promotional Image'
    },
    {
      title: 'Content',
      name: 'content',
      description: 'Full Profile Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{ type: 'project' }]
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }]
    }
  ]
}
