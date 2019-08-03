import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import 'babel-polyfill'

 const CardStyle =
     {
         minWidth: "20%",
         maxWidth: "20%",
         minHeight: "200px",
         maxHeight: "200px",
         margin: 5
     };
 const TitleStyle =
     {
         fontSize: 20
     };
 const ContentStyle =
    {
         fontSize: 10
     };

export const CardProfile = (props) =>{
        return  (
             <Card style={CardStyle}>
             <CardContent>
                 <Typography style={TitleStyle}>
                     {/* {this.props.title} */}
                     title
                 </Typography>
                 <Typography style={ContentStyle}>
                     {/* {this.props.content} */}
                     lorem
                 </Typography>
             </CardContent>
             <CardActions>
                 <Button>open profile</Button>
             </CardActions>
         </Card>
        );
};
