import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeAdmin }  from '../../components/admin/homeAdmin/homeAdmin.component.js';
import { history } from '../../_helpers/history.js';
import { authenticationService } from '../../_services/authentication.service';
import { PrivateRoute } from '../../_helpers/privateRoute.jsx';
import { Users} from '../../components/admin/users/users.component.js';
import { Companies } from '../../components/admin/companies/companies.component.js';

export class AdminLayout extends Component {
 
logout() {
  authenticationService.logout();
  history.push('/login');
}

render() {
       return(
      <Router history={history}>
        <div>          
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link> 
          <Nav.Link href="/users">Users</Nav.Link> 
          <Nav.Link href="/companies">Companies</Nav.Link> 
          <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>      
      </Nav> 
    </Navbar.Collapse>
    </Navbar>
      <PrivateRoute  path="/home" component={HomeAdmin} />  
      <PrivateRoute  path="/users" component={Users} />   
      <PrivateRoute  path="/companies" component={Companies} />     
    </div>
</Router>
    );
  }
}
export default AdminLayout;