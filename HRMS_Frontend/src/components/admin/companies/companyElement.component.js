import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import config from 'config';
import CardContent from "@material-ui/core/CardContent";
import 'babel-polyfill'
import {ElementType} from "./elementType";

export class CompanyElement extends Component{
    constructor(props){
        super(props);
        //console.log(props.content)
        this.state = {
            title: props.type === ElementType.Department ? "Department name" : "Position name"
        }
    }

    saveChanges(){

    }

    remove(){
        // if(this.props.type === ElementType.Department) {
        //     fetch(`${config.apiUrl}/api/Company/RemoveDepartment/${this.props.id}`)
        //         .then(
        //
        //             },
        //             (error) => {
        //                 this.setState({
        //                     error
        //                 })
        //             }
        //         )
        // }else if(this.props.type === ElementType.Position){
        //     fetch(`${config.apiUrl}/api/Company/RemovePosition/${this.props.id}`)
        //         .then(
        //             (result) => {
        //                 this.setState({
        //                     isLoadedPositions: true,
        //                     positions: result.items
        //                 })
        //             },
        //             (error) => {
        //                 this.setState({
        //                     error
        //                 })
        //             }
        //         )
        // }
    }

    render(){
        return  (
            <div>
                <Card>
                    <CardContent>
                        <TextField
                            id="element-name"
                            label={this.state.label}
                            value={this.props.name}
                        />
                        <Button onClick={this.saveChanges()}>Save changes</Button>
                        <Button onClick={this.remove()}>Remove</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default CompanyElement;