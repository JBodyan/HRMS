import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home }  from '../home/home.component.js';
import { history } from '../../_helpers/history.js';
import { Role } from '../../_helpers/role.js'
import { authenticationService } from '../../_services/authentication.service';
import { Login } from '../login/login.component.js';
import { Register } from '../register/register.component.js';
import { Recruitment } from '../recruitment/recruitment.component.js';
import { Employees } from '../employees/employees.component.js';
import { PrivateRoute } from '../../_helpers/privateRoute.jsx';
import { Documents } from '../documents/documents.component.js';
import { Calendar } from '../calendar/calendar.component.js';
import { Payrole } from '../payrole/payrole.component.js';

class Header extends Component {
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

logout() {
  authenticationService.logout();
  history.push('/login');
}

render() {
    const { currentUser, isAdmin } = this.state;
    return(
      <Router history={history}>
        <div>          
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/recruitment">Recruitment</Nav.Link>
          <Nav.Link href="/employees">Employees</Nav.Link> 
          <Nav.Link href="/documents">Documents</Nav.Link>      
          <Nav.Link href="/calendar">Calendar</Nav.Link>      
          <Nav.Link href="/payrole">Payrole</Nav.Link>      
          <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>      
      </Nav> 
    </Navbar.Collapse>
    </Navbar>
      <Route  path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>
      <PrivateRoute path="/home" roles={[Role.Admin]} component={Home} />
      <PrivateRoute path="/recruitment" roles={[Role.Admin]} component={Recruitment} />
      <PrivateRoute path="/employees" roles={[Role.Admin]} component={Employees} />
      <PrivateRoute path="/documents" component={Documents} />
      <PrivateRoute path="/calendar" component={Calendar} />
      <PrivateRoute path="/payrole" component={Payrole} />
    </div>
</Router>
    );
  }
}
export default Header;