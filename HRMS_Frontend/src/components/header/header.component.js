import React from 'react'
// @material-ui components
import {
  AppBar,
  Toolbar,
  IconButton, 
} from "@material-ui/core"
// @material-ui icons
import {
  Menu
} from "@material-ui/icons"

export const Header = (props) => {
  const {toggleSidebar} = props
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={toggleSidebar}>
          <Menu/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}