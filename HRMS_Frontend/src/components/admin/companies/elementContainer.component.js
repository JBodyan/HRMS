import {Component} from "react";
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CompanyElement from "./companyElement.component";
import Typography from "@material-ui/core/Typography";



export class ElementContainer extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return  (
            <div>
                <Card>
                    <legend>
                        {this.props.type}
                    </legend>
                    <CardContent>
                        {this.props.content.map((element,idx)=>(
                            <div key={idx}>
                                <CompanyElement id={element.id} name={element.name} type={this.props.type}/>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default ElementContainer;