import React, {Component} from 'react';
import config from 'config';
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "../userAdd/userAdd.component";
import Button from "@material-ui/core/Button";
import {authHeader} from "../../../../_helpers/authHeader";

const ContainerStyle = {
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

    handleUpdateUser(){

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
        const { error, isLoadedUser, user} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedUser) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
                <div>
                    <h5>UserProfile</h5>
                    <div className="container" style={ContainerStyle}>
                        <div className="form-group">
                            <TextField />
                        </div>
                    </div>
                </div>
            );
        }
    }
}