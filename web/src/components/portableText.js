import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'

const PortableText = ({blocks, style}) => (
  <BasePortableText style={style} blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default PortableText
