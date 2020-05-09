export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'domain',
      title: 'Domain Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Optional Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      styles: []
    },
    {
      name: 'url',
      title: 'Live URL',
      type: 'url'
    },
    {
      name: 'altUrl',
      title: 'Alternative URL',
      type: 'url',
      description: 'e.g. GitHub repository, directory listing'
    }
  ]
}
