export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Slogan',
      description: "Your site's slogan"
    },
    {
      name: 'primaryMenu',
      type: 'array',
      description: 'Set the primary navigation bar items.',
      title: 'Main Menu',
      of: [{ type: 'menuItem' }]
    }
  ]
}
