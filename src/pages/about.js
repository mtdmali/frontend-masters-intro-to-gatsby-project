import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout title="About This Site" description="This is the about page.">
      <h1>About This Site</h1>
      <Link to="/">Back to Home.</Link>
    </Layout>
  )
}

export default AboutPage
