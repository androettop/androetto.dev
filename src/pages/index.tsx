import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout/Layout"
import Bio from "../components/Bio/Bio"
import AboutMe from "../components/AboutMe/AboutMe"

interface BlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: Location
}

const BlogIndex = ({ data, location }: BlogIndexProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <AboutMe />
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
