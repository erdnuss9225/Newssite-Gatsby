import React, {useContext} from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"



  
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

    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    console.log(state.theme)
    console.log(dispatch)

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