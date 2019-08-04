import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const ElementStyle={
    margin: 5
};

export const UsersFilter = (props) =>{
    return  (
        <div style={ElementStyle}>
            <Card>
                <CardContent>
                    <div className="form-group">
                        <TextField
                            title="Search"
                            placeholder="Search"
                            name="searchField"
                            onChange={props.handleChange.bind(this)}
                        />
                        <Button>Filter</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};