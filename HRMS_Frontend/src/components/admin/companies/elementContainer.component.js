import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {CompanyElement} from "./companyElement.component";
import {ElementType} from "./elementType";


export const ElementContainer = (props) =>{
        return  (
            <div>
                <Card>
                    <CardContent>
                        <legend>
                            {props.type === ElementType.Department? "Departments" : "Positions"}
                        </legend>
                        {props.content.map((element,idx)=>(
                            <div key={idx}>
                                <CompanyElement handleChange={props.handleChange} remove={props.remove} id={element.id} name={element.name} type={props.type}/>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        );
};
