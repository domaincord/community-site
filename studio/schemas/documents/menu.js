export default {
  name: 'menu',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'path',
      type: 'url',
      title: 'URL Path',
      validation: Rule => Rule.uri({
        allowRelative: true
      })
    },
    {
      name: 'showInMenu',
      type: 'boolean',
      title: 'Show in menu'
    }
  ]
}
