export default {
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
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
      validation: Rule =>
        Rule.uri({
          allowRelative: true
        })
    }
  ]
}
