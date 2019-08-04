import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import 'babel-polyfill'

 const CardStyle =
     {
         minWidth: "21%",
         maxWidth: "21%",
         minHeight: "200px",
         maxHeight: "200px",
         margin: "2%"
     };

 const TitleStyle =
     {
         fontSize: 20
     };
     
 const ContentStyle =
    {
         fontSize: 12
     };

export const CardProfile = (profile) =>{
        return  (
             <Card style={CardStyle}>
             <CardContent>
                 <Typography style={TitleStyle}>
                     {profile.firstName} {profile.lastName}
                 </Typography>
                  <Typography style={ContentStyle}>
                     {profile.birthDay.toString().substring(0,10)}
                     </Typography>
                 <Typography style={ContentStyle}>
                     {profile.gender==0?"male":"female"}
                 </Typography>
             </CardContent>
             <CardActions>                 
                    <Link to={`/profile/${profile.id}`}>
                    <Button>Open profile</Button>
                 </Link>
             </CardActions>
         </Card>
        );
};
