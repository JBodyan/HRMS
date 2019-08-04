import React,{Component} from 'react';
import { authenticationService } from '../../../_services/authentication.service.js';

const formStyle =
    {
        minWidth: "300px",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "80px"
    };

export class Register extends Component{

  constructor(props) {
    super(props);  
    this.state = {
      username: "",
      email:"",
      password: ""
    };

    if (authenticationService.currentUserValue) { 
      this.props.history.push('/');
    }
    
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // authenticationService.login(this.state.username,this.state.password)
    // .then(
    //   user => {
    //       const { from } = this.props.location.state || { from: { pathname: "/" } };
    //       this.props.history.push(from);
    //   }); 
  }


  render(){
    return(
    <div style={formStyle}>
    <form onSubmit={this.handleSubmit}>
    <div className="form-group">
            <label htmlFor="username">Email</label>
            <input name="username" type="text" className={'form-control'} required  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" className={'form-control'} required  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className={'form-control'} required  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Confirm password</label>
            <input name="password" type="password" className={'form-control'} required  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
    </form>   
    </div>
    )
  }
}
export default Register;