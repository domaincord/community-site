// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: `https://domaincord.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154623356-2',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: '.domaincord.org'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: '6001158988',
        includeInDevelopment: false,
        defaultDataLayer: {platform: 'gatsby'},
        gtmAuth: 'hrEMoq93kQpqeqRsJ5rK8Q',
        gtmPreview: 'env-3',
        dataLayerName: 'GTM-NM6DZGG'
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
