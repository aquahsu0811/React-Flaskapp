import React, { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { darkTheme, lightTheme } from "./Theme"

const Layout = ({ children }) => {

  console.log("children:", children)
  

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
