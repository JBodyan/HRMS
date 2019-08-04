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
import {ProfileCandidate} from '../../components/manager/profileCandidate/profileCandidate.component.js';

export class ManagerLayout extends Component {
 
logout() {
  authenticationService.logout();
  history.push('/login');
}

render() {
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
      <PrivateRoute path="/recruitment" roles={[Role.Manager]}  component={Recruitment} />
      <PrivateRoute path="/employees" roles={[Role.Manager]} component={Employees} />
      <PrivateRoute path="/documents" roles={[Role.Manager]} component={Documents} />
      <PrivateRoute path="/calendar" roles={[Role.Manager]} component={Calendar} />
      <PrivateRoute path="/payrole" roles={[Role.Manager]} component={Payrole} />
      <PrivateRoute path="/profile/:id" roles={[Role.Manager]} component={ProfileCandidate} />
    </div>
</Router>
    );
  }
}
export default ManagerLayout;