import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import config from 'config';
import {authHeader} from "../../../../_helpers/authHeader";
import Input from "@material-ui/core/Input";

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%'
};

const FormStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class UserAdd extends Component{

    constructor(props){
        super(props);
        this.state = {

                    username: "",
                    firstName: "",
                    secondName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                    photo: null
        };
    }

    uploadPhoto = (id) =>{
        let auth = authHeader();
        let formData = new FormData();
        console.log(this.state.photo);
        formData.append('file',this.state.photo);
        fetch(`${config.apiUrl}/api/Upload/UserPhoto/${id}`,{
            method: 'post',
            headers:
                {
                    'Authorization': auth.Authorization
                },
            body: formData
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    alert(result.message);
                    history.push("/users");
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleAddUser = () =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Authentication/Register`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                },
            body: JSON.stringify(
                {
                    FirstName: this.state.firstName,
                    SecondName: this.state.secondName,
                    LastName: this.state.lastName,
                    UserName: this.state.username,
                    Phone: this.state.phone,
                    Email: this.state.email,
                    Password: this.state.password,
                    PasswordConfirm: this.state.passwordConfirm
                    })
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    this.uploadPhoto(result.id);
                    console.log(this.state.photo);
                    alert(result.id);
                }),
                (error) => {
                    alert(error);
                }
            )
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    setPhoto(e) {
        this.setState({ photo: e.target.files[0] });
    }

    render(){
            return  (
                <div>
                    <h5>AddUser</h5>
                    <div className="container" style={ContainerStyle}>
                        <div className="form-group" style={FormStyle}>
                            <TextField onChange={this.handleChange} value={this.state.firstName} name="firstName" placeholder="First name"/>
                            <TextField onChange={this.handleChange} value={this.state.secondName} name="secondName" placeholder="Second name"/>
                            <TextField onChange={this.handleChange} value={this.state.lastName} name="lastName" placeholder="Last name"/>
                            <TextField onChange={this.handleChange} value={this.state.phone} name="phone" placeholder="Phone"/>
                            <TextField onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email"/>
                            <TextField onChange={this.handleChange} value={this.state.username} name="username" placeholder="Username"/>
                            <TextField type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder="Password"/>
                            <TextField type="password" onChange={this.handleChange} value={this.state.passwordConfirm} name="passwordConfirm" placeholder="Confirm"/>
                            <label>Upload photo</label>
                            <Input type="file" name="photo" onChange={ this.setPhoto.bind(this)} />
                            <Button onClick={this.handleAddUser}>Create</Button>
                        </div>
                    </div>
                </div>
            );
        }
}