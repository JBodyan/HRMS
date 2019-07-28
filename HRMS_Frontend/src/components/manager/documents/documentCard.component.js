import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

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

export class DocumentCard extends Component{

    render(){
        return  (
            <Card style={CardStyle}>
                <CardContent>
                    <Typography style={TitleStyle}>
                        {this.props.title}
                    </Typography>
                    <Typography style={ContentStyle}>
                        {this.props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Open document</Button>
                </CardActions>
            </Card>
        );
    }
}
export default DocumentCard;