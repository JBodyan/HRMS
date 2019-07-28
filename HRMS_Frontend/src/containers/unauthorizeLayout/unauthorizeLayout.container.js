import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Login } from '../../components/unauthorize/login/login.component.js';
import { Register } from '../../components/unauthorize/register/register.component.js';
import { About } from '../../components/unauthorize/about/about.component.js';
import { Route, Switch, BrowserRouter as Router  } from 'react-router-dom';
import { history } from '../../_helpers/history.js';

export class UnauthorizeLayout extends Component{
     
  render(){
      return  (
        <Router history={history}>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">HRMS</Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link> 
          <Nav.Link href="/register">Register</Nav.Link> 
          </Nav>       
          </Navbar.Collapse>
         </Navbar>
         <Switch>
         <Route path="/" exact component={About}/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/> 
         </Switch>
         </div>
        </Router>        
      );      
  }
}
export default UnauthorizeLayout;