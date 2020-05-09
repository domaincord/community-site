import client from '@sanity/base/client'

function titleCase(str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

export default {
  name: 'listItem',
  type: 'object',
  title: 'List Item',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'slug',
      options: {
        source: async (doc, options) => {
          if (!options.parent.docItem[0]) return ''
          const item = await client.getDocument(options.parent.docItem[0]._ref)
          return item.title
        }
      }
    },
    {
      name: 'docItem',
      title: 'Item',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'profile' }, { type: 'feature' }, { type: 'post' }]
        }
      ]
    },
    {
      name: 'itemStyle',
      title: 'Item Style',
      type: 'string',
      options: {
        list: ['plain', 'card']
      }
    }
  ],
  preview: {
    select: {
      title: 'title.current',
      style: 'itemStyle'
    },
    prepare: selection => {
      return {
        title: `${titleCase(selection.style)} Item - ${titleCase(
          selection.title.replace(/-+/g, ' ')
        )}`
      }
    }
  }
}
