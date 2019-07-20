import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Navbar from '../navbar/navbar.component.js'

class Header extends Component {

  constructor(){
    super();
  this.state = {
    inputValue: '',
    backgroundcolor: '#eeeeee'
  }
}

  render() {
    const { backgroundcolor } = this.state

    return ( 
      <div>
      <AppBar position = "static" >
        <Toolbar>
              <TypoGraphy>HRMS</TypoGraphy>
              <Navbar/>
              </Toolbar>
       </AppBar>
       </div>
    );
  }
}

export default Header;