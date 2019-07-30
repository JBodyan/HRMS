import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import 'babel-polyfill'

export const CompanyToolbox = (props) =>{
        return  (
            <div>
                <Card>
                    <CardContent>
                        <legend>
                            Toolbox
                        </legend>
                        <div className="form-group">
                            <TextField
                                title="Department name"
                                placeholder="Department name"
                                name="departmentName"
                                onChange={props.handleChange.bind(this)}
                            />
                            <Button onClick={props.handleAddDepartment.bind(this)}>Add department</Button>
                        </div>
                        <div className="form-group">
                            <TextField
                                title="Position name"
                                placeholder="Position name"
                                name="positionName"
                                onChange={props.handleChange.bind(this)}
                            />
                            <Button onClick={props.handleAddPosition.bind(this)}>Add position</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
};
