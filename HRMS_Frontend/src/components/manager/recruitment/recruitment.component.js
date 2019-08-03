import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import config from 'config';
import {CardProfile} from './cardProfile.component';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardContent from "@material-ui/core/CardContent";


const ContainerStyle={
  margin:"24px"
};

const MarginTopStyle={
  marginTop:"36px"
};

const ContentStyle =
    {
        display: "flex",
        alignContent:"flex-start",
        flexDirection: "row",
        flexWrap: "wrap"
    };

export class Recruitment extends Component{

  constructor(props){
    super(props);
  }

  render(){
      return  (
        <Grid container spacing={2} style={ContainerStyle}>
          <Grid item xs={3}>
              <Grid container spacing={0}>
                  <Grid item>
                      <TextField/>
                  </Grid>
                  <Grid item>
                      <Button>Search</Button>
                  </Grid>
                </Grid>
                <Grid container spacing={2}> 
                <FormControl component="fieldset" style={MarginTopStyle}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender"  name="gender">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />  
                  </RadioGroup>
                </FormControl>              
              </Grid>
              <Grid>
              <TextField style={MarginTopStyle}
                  label="Birthday"
                  type="date"
                  defaultValue="1990-01-01"
              />
              </Grid>
          </Grid>
          <Grid item xs={9} style={ContentStyle}>
                <CardProfile/>
                <CardProfile/> 
                <CardProfile/> 
                <CardProfile/> 
                <CardProfile/> 
                <CardProfile/> 
                <CardProfile/>
          </Grid>
        </Grid>
      );
  }
}
export default Recruitment;