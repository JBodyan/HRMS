import {Component} from "react";
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";



export class ElementContainer extends Component{
    constructor(props){
        super(props);

    }



    render(){
        return  (
            <div>
                <Card>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default ElementContainer;