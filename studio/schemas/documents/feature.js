export default {
  name: 'feature',
  type: 'document',
  title: 'Feature',
  fields: [
    {
      name: 'featType',
      type: 'string',
      title: 'Feature Type',
      options: {
        list: [
          {
            title: 'Benefit / Value Proposition',
            value: 'benefits'
          },
          {
            title: 'Feature',
            value: 'features'
          }
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'block'}],
      styles: []
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Screenshot or Product Image',
      type: 'accessibleImage'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Font Awesome 5 class list'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'CSS supported color'
    }
  ]
}
