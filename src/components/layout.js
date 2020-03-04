import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"


  
    export default ({ children }) => {
        const data = useStaticQuery(
          graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `
        )
        return (
          <div>
            <div class="header">
                <Link style={{ textDecoration: 'none' }} to={`/`}>
                  <h1> {data.site.siteMetadata.title} </h1>
                </Link>
                
                <Link to={"/about"}>
                  About
                </Link>
            </div>
             {children}
          </div>
        )
    }