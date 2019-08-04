import React, {Component} from 'react';
import config from 'config';
import CircularProgress from "@material-ui/core/CircularProgress";

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class UserProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoadedUser: false,
            user: null
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser(){
        this.setState({
            isLoadedUser: true
        })
    }

    render(){
        const { error, isLoadedUser, user} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedUser) {
            return <div className="container" style={ContainerStyle}><CircularProgress/></div>;
        } else {
            return  (
                <div>
                    <h5>UserProfile</h5>
                    <div className="container" style={ContainerStyle}>

                    </div>
                </div>
            );
        }
    }
}