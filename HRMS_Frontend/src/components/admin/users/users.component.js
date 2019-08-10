import React, {Component} from 'react';
import config from 'config';
import {authHeader} from "../../../_helpers/authHeader"
import CircularProgress from "@material-ui/core/CircularProgress";
import NavLink from "react-bootstrap/NavLink";
import {Redirect} from "react-router";
import MUIDataTable from "mui-datatables";
import { history } from '../../../_helpers/history.js';

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class Users extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoadedUsers: false,
            users: [],
            redirectToUser: false,
            redirectId: "",
            dataTableColumns: [
                {
                    name: "firstName",
                    label: "First Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "secondName",
                    label: "Second Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "lastName",
                    label: "Last Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "email",
                    label: "Email",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "phoneNumber",
                    label: "Phone",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "id",
                    options: {
                        print: false,
                        download: false,
                        viewColumns: false,
                        display: false,
                        filter: false,
                        sort: false,
                    }
                }
            ],
            options: {
                filterType: 'textField',
                selectableRows: 'none',
                onRowClick: (rowData, rowMeta, e) => {
                    history.push(`/userProfile/${rowData[5]}`)
                        this.setState({
                        redirectToUser: true,
                        redirectId: rowData[5]
                    });

                }
            }

        }

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
        const { error, isLoadedUsers,users, redirectToUser, redirectId} = this.state;
        if (redirectToUser) return <Redirect to={{pathname:`/userProfile/${redirectId}`}}/>;
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
                        <MUIDataTable
                            title={"Users"}
                            data={users}
                            columns={this.state.dataTableColumns}
                            options={this.state.options}
                        />
                    </div>
                </div>
            );
        }
    }
}