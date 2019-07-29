import React, {Component} from 'react';
import config from 'config';
import ElementContainer from "./elementContainer.component";
import {ElementType} from "./elementType";

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
                    <ElementContainer type={ElementType.Department} content={departments}/>
                    <ElementContainer type={ElementType.Position} content={positions}/>
                </div>
            </div>
            );
        }
    }
}
export default Companies;