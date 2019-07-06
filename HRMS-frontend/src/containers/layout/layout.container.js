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

  toggleSidebar(){
    this.setState({
      isShowSidebar: !this.state.isShowSidebar
    })
  }

  render(){
    const classes = this.props.classes
    const {isShowSidebar} = this.state
    console.log(isShowSidebar)
    return(
      <Fragment>
        <CssBaseline>
        <Header toggleSidebar={this.toggleSidebar} />
        <div className={classes.toolbar}/>
        <Drawer
        variant={'persistent'}
        classes={{
          paper:classes.drawerPaper
        }}
          open={isShowSidebar}
          anchor="left"
          onClose={this.toggleSidebar}
          >
            Bodyan the beast
        </Drawer>
        asfafasfasfasdf
        </CssBaseline>
      </Fragment>
    )
  }
}