export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
      styles: []
    }
  ]
}
