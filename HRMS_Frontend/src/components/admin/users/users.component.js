import React, {Component} from 'react';
import config from 'config';
import {authHeader} from "../../../_helpers/authHeader"
import CircularProgress from "@material-ui/core/CircularProgress";
import {UsersFilter} from "./usersFilter.component";
import {UsersTable} from "./usersTable";
import Link from "@material-ui/core/Link";
import NavLink from "react-bootstrap/NavLink";

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoadedUsers: false,
            users: []
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers(){
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Manager/GetManagers`,{
            headers:
                {
                    'Authorization': auth.Authorization
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    this.setState({
                        isLoadedUsers: true,
                        users: result
                    });
                    //console.log(this.state);
                }),
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    };

    render(){
        const { error, isLoadedUsers,users} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedUsers) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
                <div>
                    <h5>Users</h5>
                    <div className="container" style={ContainerStyle}>
                        <NavLink href="/addUser">Add new Manager</NavLink>
                        <UsersFilter handleChange={this.handleChange}/>
                        <UsersTable users={users}/>
                    </div>
                </div>
            );
        }
    }
}