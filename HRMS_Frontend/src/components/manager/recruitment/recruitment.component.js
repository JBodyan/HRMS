import React, {Component} from 'react';
import config from 'config';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {CardListProfile} from './cardListProfile.component.js';
import { history } from '../../../_helpers/history';
import 'babel-polyfill';


const ContainerStyle={
  padding :"30px"
};

const ButtonGOStyle={
  marginLeft:"16px"
};

const ButtonAddStyle={
  marginTop:"60px"  
};

const MarginTopStyle={
  marginTop:"36px"
};

const ContentStyle =
{
    display: "flex",
    alignContent:"flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
};

export class Recruitment extends Component{

  constructor(props){
    super(props);
    history.push('/recruitment');
  }

  render(){
      return  (
        <Grid container style={ContainerStyle}>
          <Grid item xs={3}>
              <Grid container>
                  <Grid item>
                      <TextField placeholder="search..."/>
                  </Grid>
                  <Grid item>
                      <Button variant="contained" style={ButtonGOStyle}>GO!</Button>
                  </Grid>
                </Grid>
                <Grid container> 
                <FormControl component="fieldset" style={MarginTopStyle}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender"  name="gender">
                  <FormControlLabel value="2" control={<Radio />} label="All" />
                    <FormControlLabel value="1" control={<Radio />} label="Female" />
                    <FormControlLabel value="0" control={<Radio />} label="Male" />  
                  </RadioGroup>
                </FormControl>              
              </Grid>
              <Grid item>
              <TextField style={MarginTopStyle} label="Birthday" type="date" defaultValue="1990-01-01" />
              </Grid>
              <Grid>
              <Button style={ButtonAddStyle} size="large" variant="contained">Add profile</Button>
              </Grid>
          </Grid>
          <Grid xs={9} item style={ContentStyle}>  
          <CardListProfile/>
          </Grid>
        </Grid>
      );
  }
}
export default Recruitment;