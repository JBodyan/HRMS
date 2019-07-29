import React, {Component} from 'react';
import config from 'config';
import ElementContainer from "./elementContainer.component";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Companies extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoadedDepartments: false,
            isLoadedPositions: false,
            departments: [],
            positions: [],
            newDepartmentName: "",
            newPositionName: ""
        }
    }

    handleDepartmentName(name){
        this.setState({newDepartmentName: name});
    }
    handlePositionName(name){
        this.setState({newPositionName: name});
    }

    componentDidMount() {
        this.loadDepartments();
        this.loadPositions();
        console.log(this.state);
    }

    loadDepartments(){
        fetch(`${config.apiUrl}/api/Company/GetDepartments`)
            .then(
                (result) => {
                    this.setState({
                        isLoadedDepartments: true,
                        departments: result.items
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }
    loadPositions(){
        fetch(`${config.apiUrl}/api/Company/GetPositions`)
            .then(
                (result) => {
                    this.setState({
                        isLoadedPositions: true,
                        positions: result.items
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }
    addDepartment(){

    };
    addPosition(){

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
                    <ElementContainer content={departments}/>
                    <ElementContainer content={positions}/>
                </div>
            </div>
            );
        }
    }
}
export default Companies;