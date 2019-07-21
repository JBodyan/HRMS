import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home }  from '../home/home.component.js';
import { Recruitment } from '../recruitment/recruitment.component.js';
import { Employees } from '../employees/employees.component.js';
import { Documents } from '../documents/documents.component.js';
import { Calendar } from '../calendar/calendar.component.js';
import { Payrole } from '../payrole/payrole.component.js';
import { Logout } from '../logout/logout.component.js';


class Header extends Component {
  render() {
    return(
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">HRMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/recruitment">Recruitment</Nav.Link>
          <Nav.Link href="/employees">Employees</Nav.Link> 
          <Nav.Link href="/documents">Documents</Nav.Link>      
          <Nav.Link href="/calendar">Calendar</Nav.Link>      
          <Nav.Link href="/payrole">Payrole</Nav.Link>      
          <Nav.Link href="/logout">Logout</Nav.Link>      
      </Nav>      
    </Navbar.Collapse>
    </Navbar>
      <Route path="/home" component={Home} />
      <Route path="/recruitment" component={Recruitment} />
      <Route path="/employees" component={Employees} />
      <Route path="/documents" component={Documents} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/payrole" component={Payrole} />
      <Route path="/logout" component={Logout} />
  </Router>
    );
  }
}
export default Header;