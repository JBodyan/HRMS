import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">HRMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#features">Recruitment</Nav.Link>
          <Nav.Link href="#pricing">Employees</Nav.Link> 
          <Nav.Link href="#pricing">Documents</Nav.Link>      
          <Nav.Link href="#pricing">Calendar</Nav.Link>      
          <Nav.Link href="#pricing">Payrole</Nav.Link>      
          <Nav.Link href="#pricing">Logout</Nav.Link>      
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
  }
}
export default Header;