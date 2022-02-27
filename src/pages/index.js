import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata ?? {}

  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello, World!</h1>
        <Link to="/about">Go to About.</Link>
      </main>
    </>
  )
}

export default IndexPage
