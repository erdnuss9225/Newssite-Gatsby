import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default ({data}) => {

  console.log(data)

  return (
    <Layout>
      
      
      <h4>{data.allMarkdownRemark.totalCount} Artikel verfügbar</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
      
        <div key={node.id} class="teaser">
          <Link to={node.fields.slug} style={{ textDecoration: 'none'}}>
            <img src={node.frontmatter.teaser_image} alt="teaser_image"/>
          </Link>
          <div class="teaser__text">
              <Link to={node.fields.slug} style={{ textDecoration: 'none', color: 'black'  }}>
                <h3>{node.frontmatter.headline}</h3>
                <p>{node.frontmatter.abstract}</p>
              </Link>
        </div>

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