import React, {Component} from 'react';

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class UserAdd extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render(){
            return  (
                <div>
                    <h5>AddUser</h5>
                    <div className="container" style={ContainerStyle}>

                    </div>
                </div>
            );
        }
}