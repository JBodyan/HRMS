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
  const {toggleSidebar, isShowedSidebar} = props
  console.log(props)
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={()=>{
          const newState = !isShowedSidebar
          toggleSidebar(newState)
        }}>
          <Menu/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}