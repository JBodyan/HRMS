import React, {Component} from 'react';
import { HeaderUser } from "../../components/headerUser/headerUser.component";
import { authenticationService } from '../../_services/authentication.service';
import { Role } from '../../_helpers/role.js';
import  { Login } from '../../components/login/login.component';

export class Layout extends Component{

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

  render(){
    return (      
      <Login/>
    );
  }
}
export default Layout;