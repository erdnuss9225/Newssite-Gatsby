import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{article.frontmatter.headline}</h1>
        <h3>{article.frontmatter.abstract}</h3>
        <img src={article.frontmatter.header_image} alt={article.frontmatter.slug}/>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        headline
        abstract
        header_image
        slug
      }
    }
  }
`