import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default ({data}) => {

  console.log(data)

  return (
    <Layout>
      <h1>Startseite mit Artikelteasern</h1>
      <h4>{data.allMarkdownRemark.totalCount} Artikel verfügbar</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
      
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <img src={node.frontmatter.teaser_image} alt="teaser_image"/>
            <h3>{node.frontmatter.headline}</h3>
            <p>{node.frontmatter.abstract}</p>
          </Link>

        </div>
      

      ) )}
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          teaser_image
          headline
          abstract
        }
      }
    }
  }
}
`