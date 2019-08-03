import React, {Component} from 'react';
import config from 'config';
import {ElementContainer} from "./elementContainer.component";
import {ElementType} from "./elementType";
import {authHeader} from "../../../_helpers/authHeader"
import {CompanyToolbox} from "./companyToolbox.component";
import CircularProgress from "@material-ui/core/CircularProgress";

const ContainerStyle = {
    marginTop:"20px",
    display: 'flex',
    justifyContent: 'center'
};

export class Companies extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoadedDepartments: false,
            isLoadedPositions: false,
            departments: [],
            positions: [],
            departmentName: "",
            positionName: ""
        };
        this.handleAddDepartment = this.handleAddDepartment.bind(this);
        this.handleAddPosition = this.handleAddPosition.bind(this);


    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadDepartments();
        this.loadPositions();
    }

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

    handleAddDepartment = () =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/AddDepartment`,{
            method: 'post',
            headers:
                {
                'Content-Type': 'application/json',
                'Authorization': auth.Authorization
                },
            body: JSON.stringify({Name: this.state.departmentName})
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    alert(result.message);
                    this.setState({
                        departmentName: ""
                    });
                    this.loadDepartments();
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleAddPosition = () =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/AddPosition`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                },
            body: JSON.stringify({Name: this.state.positionName})
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    alert(result.message);
                    this.setState({
                        positionName: ""
                    });
                    this.loadPositions();
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleRemoveDepartment = id =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/DeleteDepartment/${id}`,{
            method: 'delete',
            headers:
                {
                    'Content-Type': 'application/json',
                    auth
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(event);
                    alert(result.message);
                    this.loadDepartments();
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    handleRemovePosition = id =>{
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/DeletePosition/${id}`,{
            method: 'delete',
            headers:
                {
                    'Content-Type': 'application/json',
                    auth
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    alert(result.message);
                    this.loadPositions();
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    render(){
        const { error, isLoadedDepartments, isLoadedPositions, positions, departments } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedDepartments || !isLoadedPositions) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
            <div>
                {/* <h5>Companies</h5> */}
                <div className="container" style={ContainerStyle}>
                    <CompanyToolbox handleChange={this.handleChange} handleAddDepartment={this.handleAddDepartment} handleAddPosition={this.handleAddPosition}/>
                    <ElementContainer handleChange={this.handleChange} remove={this.handleRemoveDepartment} type={ElementType.Department} content={departments}/>
                    <ElementContainer handleChange={this.handleChange} remove={this.handleRemovePosition} type={ElementType.Position} content={positions}/>
                </div>
            </div>
            );
        }
    }
}