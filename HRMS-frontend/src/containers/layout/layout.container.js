import React, {Component, Fragment} from 'react'
// @material-ui components
import { CssBaseline, Drawer, Collapse } from "@material-ui/core"
// @material-ui styles
import { withStyles } from "@material-ui/core/styles"
// components
import {Header} from "../../components/header/header.component"
import {Sidebar} from "../../components/sidebar/sidebar.component"

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: 250,
},

})

@withStyles(styles)
export class Layout extends Component{

  constructor(props){
    super(props)
    this.state = {
      isShowSidebar: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }  

  toggleSidebar(newState){
    console.log(newState)
    this.setState({
      isShowSidebar: newState
    })
  }

  render(){
    const classes = this.props.classes
    const {isShowSidebar} = this.state
    console.log('reload')
    return(
      <Fragment>
        <CssBaseline/>
        <Header toggleSidebar={(newState)=>{
          console.log(newState)
          this.toggleSidebar(newState)
        }} isShowedSidebar={isShowSidebar} />
        <div className={classes.toolbar}/>
        <Collapse in={isShowSidebar} timeout="auto" unmountOnExit>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
                    }}
          >
            <Sidebar />
          </Drawer>
          </Collapse>

      </Fragment>
    )
  }
}