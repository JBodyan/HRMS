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
            isLoadedDepartments: false,
            isLoadedPositions: false,
            isLoadedUsers: false,
            users: [],
            departments: [],
            positions: []
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadDepartments();
        this.loadPositions();
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
    loadDepartments(){
        fetch(`${config.apiUrl}/api/Company/GetDepartments`)
            .then( result => result.json().then((result)=>{
                    //console.log(result);
                    this.setState({
                        isLoadedDepartments: true,
                        departments: result
                    });
                    //console.log(this.state);
                }),
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }
    loadPositions(){
        fetch(`${config.apiUrl}/api/Company/GetPositions`)
            .then( result => result.json().then((result)=>{
                    //console.log(result);
                    this.setState({
                        isLoadedPositions: true,
                        positions: result
                    });
                    //console.log(this.state);
                }),
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }

    render(){
        const { error, isLoadedDepartments, isLoadedPositions,isLoadedUsers,users, positions, departments } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedDepartments || !isLoadedPositions || !isLoadedUsers) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
                <div>
                    <h5>Users</h5>
                    <div className="container" style={ContainerStyle}>
                        <NavLink>Add new Manager</NavLink>
                        <UsersFilter handleChange={this.handleChange} positions={positions} department={departments}/>
                        <UsersTable users={users}/>
                    </div>
                </div>
            );
        }
    }
}