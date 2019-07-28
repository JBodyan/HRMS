import React, {Component} from 'react';
import { Role } from '../../_helpers/role.js';
import { authenticationService } from '../../_services/authentication.service.js';
import { ManagerLayout } from '../managerLayout/managerLauout.container.js';
import { AdminLayout } from '../adminLayout/adminLayout.container.js';
import { UnauthorizeLayout } from '../unauthorizeLayout/unauthorizeLayout.container.js';

export class App extends Component{
    
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
    return currentUser? isAdmin? (<AdminLayout/>):(<ManagerLayout/>):(<UnauthorizeLayout/>);
  }
}
export default App;