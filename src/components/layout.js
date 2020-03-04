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

    if (state.theme === "de") {

      return (
        <div>
        <header class="header">
            <Link style={{ textDecoration: 'none' }} to="/"><h1 class="headline_page">{data.site.siteMetadata.title}</h1></Link>
            <div class="languagepicker">
              Sprache ist    {state.theme} <br></br>
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: "TOGGLE_THEME" })
                }}
              >
                Show english version
              </button>
            </div>
        </header>
        {children}
        </div>
      )
      
    } else {
  
      return (
        <div>
          <header class="header">
              <Link style={{ textDecoration: 'none' }} to="/"><h1 class="headline_page">{data.site.siteMetadata.title}</h1></Link>
              <div class="languagepicker">
                Language is    {state.theme} <br></br>
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: "TOGGLE_THEME" })
                  }}
                >
                  Deutsche Version anzeigen
                </button>
              </div>
          </header>
          {children}
        </div>
        
      )
  
    }
}