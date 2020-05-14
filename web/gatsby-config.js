// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: `https://domaincord.org/`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NM6DZGG',
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `nHX9amYrAFkzHN23393smr7Zdi3GmwTh`,
        devKey: ``,
        trackPage: false,
        host: ``,
        delayLoad: true,
        delayLoadTime: 1000
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    'gatsby-plugin-sitemap'
  ]
}
