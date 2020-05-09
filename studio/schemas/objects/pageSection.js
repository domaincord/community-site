export default {
  title: 'Page Section',
  name: 'pageSection',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'listItem' }]
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'accessibleImage'
    },
    {
      name: 'stickerImage',
      title: 'Sticker Image',
      type: 'accessibleImage'
    },
    {
      name: 'itemsPerRow',
      title: 'Items Per Row',
      type: 'number'
    },
    {
      name: 'fluidItems',
      title: 'Fluid Items',
      type: 'boolean',
      description: 'All items are the same width if false'
    },
    {
      name: 'fullWidth',
      title: 'Full Width Section',
      type: 'boolean',
      description: 'full width section if true'
    },
    {
      name: 'stickerPosition',
      title: 'Sticker Position',
      type: 'string',
      options: {
        list: [
          'top left',
          'top center',
          'top right',
          'bottom left',
          'bottom center',
          'bottom right',
          'center left',
          'center right'
        ]
      }
    }
  ]
}
