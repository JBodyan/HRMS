import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import 'babel-polyfill'
import Fab from "@material-ui/core/Fab";
import CardActions from "@material-ui/core/CardActions";

const ElementStyle={
    margin: 5
};

const RemoveButtonStyle={
    backgroundColor: '#B33A3A'
};

const SaveChangesButtonStyle={
    backgroundColor: '#F96D09'
};

const IconStyle={

};

export const CompanyElement = (props) =>{
        return  (
            <div style={ElementStyle}>
                <Card>
                    <CardContent>
                        <TextField
                            id="element-name"
                            name='element-name'
                            label={props.label}
                            value={props.name}
                            inputProps={{
                                readOnly: false
                            }}
                            onChange={props.handleChange.bind(this)}
                            onDoubleClick={()=>{
                                this.inputProps.readOnly = false;
                            }}
                            onBlur={()=>{
                                this.inputProps.readOnly = true;
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Fab style={SaveChangesButtonStyle}>
                            <SaveIcon style={IconStyle}/>
                        </Fab>
                        <Fab onClick={() =>{props.remove(props.id)}} style={RemoveButtonStyle}>
                            <DeleteIcon style={IconStyle}/>
                        </Fab>
                    </CardActions>
                </Card>
            </div>
        );
    };