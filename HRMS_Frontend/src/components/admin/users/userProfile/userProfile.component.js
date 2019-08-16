import React, {Component} from 'react';
import config from 'config';
import CircularProgress from "@material-ui/core/CircularProgress";
import {authHeader} from "../../../../_helpers/authHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};
const FormStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};


export class UserProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: null,
            isLoadedUser: false,
            user: {},
            newPassword: "",
            passwordConfirm: ""
        };
    }

    handleResetPassword = id =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Manager/ResetPassword/${id}`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                },
            body:
                {
                    password: this.state.newPassword
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleUpdateUser = id =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Manager/UpdateManager/${id}`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                },
            body:
                JSON.stringify({
                    firstName: this.state.user.firstName,
                    secondName: this.state.user.secondName,
                    lastName: this.state.user.lastName,
                    userName: this.state.user.userName,
                    phone: this.state.user.phoneNumber,
                    email: this.state.user.email
                })
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleChangeUser = event => {
        this.setState({
             user:{
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadUser(this.state.id);
    }

    loadUser = id =>{
        console.log(id);
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Manager/GetManager/${id}`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);

                    this.setState({
                        user: result,
                        isLoadedUser: true
                    });
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    render(){
        const { error, isLoadedUser} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedUser) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
                <div>
                    <h5>UserProfile</h5>
                    <div className="container" style={ContainerStyle}>
                        <div className="form-group" style={FormStyle}>
                            <TextField placeholder="First name" value={this.state.user.firstName} name="firstName" onChange={this.handleChangeUser.bind(this)}/>
                            <TextField placeholder="Second name" value={this.state.user.secondName} name="secondName" onChange={this.handleChangeUser.bind(this)}/>
                            <TextField placeholder="Last name" value={this.state.user.lastName} name="lastName" onChange={this.handleChangeUser.bind(this)}/>
                            <TextField placeholder="Phone" value={this.state.user.phoneNumber} name="phoneNumber" onChange={this.handleChangeUser.bind(this)}/>
                            <TextField placeholder="Email" value={this.state.user.email} name="email" onChange={this.handleChangeUser.bind(this)}/>
                            <TextField placeholder="Username" value={this.state.user.userName} name="userName" onChange={this.handleChangeUser.bind(this)}/>
                            <Button onClick={() => {this.handleUpdateUser(this.state.id)}}>Save changes</Button>
                        </div>
                        <legend>Reset password</legend>
                        <div className="form-group" style={FormStyle}>
                            <TextField type="password" placeholder="New password" value={this.state.newPassword} name="newPassword" onChange={this.handleChange.bind(this)}/>
                            <TextField type="password" placeholder="Password confirm" value={this.state.passwordConfirm} name="passwordConfirm" onChange={this.handleChange.bind(this)}/>
                            <Button onClick={() => {this.handleResetPassword(this.state.id)}}>Reset password</Button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}