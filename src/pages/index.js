import React, {useContext} from "react"
import Layout from "../components/layout"
import { Link, graphql} from "gatsby"
import {
  GlobalStateContext,
} from "../context/GlobalContextProvider"

export default ({data}) => {
  const state = useContext(GlobalStateContext)
  console.log(data)

  if (state.theme === "en") {

    return (
      <Layout>

        
        {data.en.edges.map(({node}) => (
        
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
    )} else {

      return (
        <Layout>
  
          
          {data.de.edges.map(({node}) => (
          
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
}

export const query = graphql`
query {
  en: allMarkdownRemark(filter: {frontmatter: {lang: {eq: "en"}}}) {
    edges {
      node {
        frontmatter {
          teaser_image
          headline
          abstract
        }
        fields {
          slug
        }
      }
    }
    totalCount
  }
  de: allMarkdownRemark(filter: {frontmatter: {lang: {eq: "de"}}}) {
    edges {
      node {
        frontmatter {
          teaser_image
          headline
          abstract
        }
        fields {
          slug
        }
      }
    }
    totalCount
  }
}
`