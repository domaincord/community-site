import React, { useState } from 'react'
import Header from '../components/header'
import '../styles/layout.css'
import styles from './layout.module.css'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      id
      title
      tagline
      primaryMenu {
        path
        title
        _key
      }
    }
  }
`

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }
        return (
          <>
            <Header
              siteTitle={data.site.title}
              menu={data.site.primaryMenu}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              showNav={showNav}
            />
            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>
              <div className={styles.footerWrapper}>
                <div className={styles.siteInfo}>
                  &copy; {new Date().getFullYear()}, Built with{' '}
                  <a href="https://www.sanity.io">Sanity</a> &amp;
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
              </div>
            </footer>
          </>
        )
      }}
    />
  )
}

export default Layout
