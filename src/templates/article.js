import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <div class="article">
        <h2 class="article__headline">{article.frontmatter.headline}</h2>
        <h3 class="article__abstract">{article.frontmatter.abstract}</h3>
        <img class="article__headerImage" src={article.frontmatter.header_image} alt={article.frontmatter.slug}/>
        <div class="article__text" dangerouslySetInnerHTML={{ __html: article.html }} />
        <a class="link" href="/" >Weitere Artikel</a>
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