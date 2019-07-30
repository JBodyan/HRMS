import React, {Component} from 'react';
import config from 'config';
import ElementContainer from "./elementContainer.component";
import {ElementType} from "./elementType";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {authHeader} from "../../../_helpers/authHeader"

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

    handleAddDepartment(){
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/AddDepartment`,{
            method: 'post',
            headers:
                {
                'Content-Type': 'application/json',
                auth
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
                    this.setState({
                        error
                    })
                }
            )
    };
    handleAddPosition(){
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Company/AddPosition`,{
            method: 'post',
            headers:
                {
                    'Content-Type': 'application/json',
                    auth
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
                    this.setState({
                        error
                    })
                }
            )
    };

    render(){
        const { error, isLoadedDepartments, isLoadedPositions, positions, departments } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedDepartments || !isLoadedPositions) {
            return <div>Загрузка...</div>;
        } else {
            return  (
            <div>
                <h5>Companies</h5>
                <div className="container">
                    <Card>
                        <legend>
                            Toolbox
                        </legend>
                        <CardContent>
                            <div className="form-group">
                                <TextField
                                   title="Department name"
                                   placeholder="Department name"
                                   name="departmentName"
                                   value={this.state.departmentName}
                                   onChange={this.handleChange.bind(this)}
                                />
                                <Button onClick={this.handleAddDepartment}>Add department</Button>
                            </div>
                            <div className="form-group">
                                <TextField
                                    title="Position name"
                                    placeholder="Position name"
                                    name="positionName"
                                    value={this.state.positionName}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <Button onClick={this.handleAddPosition}>Add position</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <ElementContainer type={ElementType.Department} content={departments}/>
                    <ElementContainer type={ElementType.Position} content={positions}/>
                </div>
            </div>
            );
        }
    }
}
export default Companies;