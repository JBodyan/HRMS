import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import config from 'config';
import CardContent from "@material-ui/core/CardContent";
import 'babel-polyfill'

export class CompanyElement extends Component{
    constructor(props){
        super(props);
    }

    saveChanges(){

    }

    remove(){
        fetch(`${config.apiUrl}/api/Company/RemovePositions`)
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

    render(){
        return  (
            <div>
                <Card>
                    <CardContent>
                        <TextField
                            id="element-name"
                            label={this.props.label}
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