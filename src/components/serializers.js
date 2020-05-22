import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    accessibleImage: Figure
  }
}

export default serializers
