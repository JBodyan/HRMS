import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import DocumentCard from "./documentCard.component";

const CardStyle =
    {
        marginTop: 5,
        minWidth: "80%",
        maxWidth: "80%",
        maxHeight: "90%",
        minHeight: "90%"
    };
const ContentStyle =
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    };

export class DocumentFileList extends Component{

    render(){
        return  (
            <Card style={CardStyle}>
                <CardContent style={ContentStyle}>
                    <DocumentCard title="Title1" content="Lorem 1"/>
                    <DocumentCard title="Title2" content="Lorem 2"/>
                    <DocumentCard title="Title3" content="Lorem 3"/>
                    <DocumentCard title="Title4" content="Lorem 4"/>
                    <DocumentCard title="Title5" content="Lorem 1"/>
                    <DocumentCard title="Title6" content="Lorem 2"/>
                    <DocumentCard title="Title7" content="Lorem 3"/>
                    <DocumentCard title="Title8" content="Lorem 4"/>
                    <DocumentCard title="Title9" content="Lorem 1"/>
                    <DocumentCard title="Title10" content="Lorem 2"/>
                    <DocumentCard title="Title11" content="Lorem 3"/>
                    <DocumentCard title="Title12" content="Lorem 4"/>
                    <DocumentCard title="Title5" content="Lorem 1"/>
                    <DocumentCard title="Title6" content="Lorem 2"/>
                    <DocumentCard title="Title7" content="Lorem 3"/>
                    <DocumentCard title="Title8" content="Lorem 4"/>
                    <DocumentCard title="Title9" content="Lorem 1"/>
                    <DocumentCard title="Title10" content="Lorem 2"/>
                    <DocumentCard title="Title11" content="Lorem 3"/>
                    <DocumentCard title="Title12" content="Lorem 4"/>
                </CardContent>
            </Card>
        );
    }
}
export default DocumentFileList;