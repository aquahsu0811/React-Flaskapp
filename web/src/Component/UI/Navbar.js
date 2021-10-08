import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import MuiLink from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "2rem",
    marginLeft: "auto",
    marginRight: "auto"
  }
}))

export default function Navbar() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <AppBar
        color="primary"
        elevation={0}
        style={{ borderBottom: `1px solid ${theme.palette.secondary.main}` }}
      >
        <Toolbar>
          <MuiLink
            to="/"
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.title}
          >
            Image Processing
          </MuiLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
