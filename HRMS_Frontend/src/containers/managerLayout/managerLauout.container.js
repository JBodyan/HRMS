import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeManager }  from '../../components/manager/homeManager/homeManager.component.js';
import { history } from '../../_helpers/history.js';
import { authenticationService } from '../../_services/authentication.service';
import { PrivateRoute } from '../../_helpers/privateRoute.jsx';
import { Recruitment } from '../../components/manager/recruitment/recruitment.component.js';
import { Employees } from '../../components/manager/employees/employees.component.js';
import { Documents } from '../../components/manager/documents/documents.component.js';
import { Calendar } from '../../components/manager/calendar/calendar.component.js';
import { Payrole } from '../../components/manager/payrole/payrole.component.js';
import { Role } from '../../_helpers/role';

export class ManagerLayout extends Component {
 
logout() {
  authenticationService.logout();
  history.push('/login');
}

render() {
   history.push('/');
       return(
      <Router history={history}>
        <div>          
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand >HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/recruitment">Recruitment</Nav.Link>
          <Nav.Link href="/employees">Employees</Nav.Link> 
          <Nav.Link href="/documents">Documents</Nav.Link>      
          <Nav.Link href="/calendar">Calendar</Nav.Link>      
          <Nav.Link href="/payrole">Payrole</Nav.Link>      
          <Nav.Link onClick={this.logout}>Logout</Nav.Link>      
      </Nav> 
    </Navbar.Collapse>
    </Navbar>
      <PrivateRoute exact path="/" component={HomeManager} />
      <PrivateRoute path="/recruitment" roles={[Role.User]}  component={Recruitment} />
      <PrivateRoute path="/employees" roles={[Role.User]} component={Employees} />
      <PrivateRoute path="/documents" roles={[Role.User]} component={Documents} />
      <PrivateRoute path="/calendar" roles={[Role.User]} component={Calendar} />
      <PrivateRoute path="/payrole" roles={[Role.User]} component={Payrole} />
    </div>
</Router>
    );
  }
}
export default ManagerLayout;