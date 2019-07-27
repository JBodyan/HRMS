import React, {Component} from 'react';
import { Role } from '../../_helpers/role.js';
import { Navbar, Nav } from 'react-bootstrap';
import { authenticationService } from '../../_services/authentication.service.js';
import { Login } from '../../components/login/login.component.js';
import { Header } from '../../components/header/header.component.js';
import { Register } from '../../components/register/register.component.js';
import { Route,Switch,Redirect, BrowserRouter as Router  } from 'react-router-dom';
import { history } from '../../_helpers/history.js';
import {NotFound} from '../../components/notfound/notfound.component.js';

export class DefaultLayout extends Component{
    
    constructor(props) {
      super(props);
  
      this.state = {
          currentUser: null,
          isAdmin: false
      };
    }
  
    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
      }
      

  render(){
    const { currentUser, isAdmin } = this.state;

      if(!currentUser){
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
         <Route path="/login" exact component={Login}/>
         <Route  path="/register" component={Register}/>          
         <Redirect from="/" to="/login"/>
         <Route component={NotFound} />
         </Switch>
         </div>
        </Router>        
      );
      }
      else{
          <Header/>
      }
  }
}
export default DefaultLayout;