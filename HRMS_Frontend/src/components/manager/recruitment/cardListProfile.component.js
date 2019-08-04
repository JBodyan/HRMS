import React from 'react';
import {CardProfile} from './cardProfile.component';
import config from 'config';
import {authHeader} from "../../../_helpers/authHeader";
import CircularProgress from "@material-ui/core/CircularProgress";
import 'babel-polyfill';

export class CardListProfile  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoadedProfiles: false,
            profiles: []
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        this.loadProfiles();
    }

    loadProfiles(){
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Member/Candidates`,
        {
        method: 'get',
        headers:
            {
            'Authorization': auth.Authorization
            }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);
                    this.setState({
                        isLoadedProfiles: true,
                        profiles: result
                    });
                    console.log(this.state);
                }),
                (error) => {
                    console.log(error);
                    this.setState({
                        error
                    })
                }
            )
    }

    render(){
        const { error, isLoadedProfiles, profiles } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoadedProfiles) {
            return <div className="container"><CircularProgress/></div>;
        } else { 
            if(profiles.length==0){
                return <div><p>There are any profiles at the data base!</p></div>;
            }
            else{
                return (profiles.map((value)=>{
                            return (<CardProfile key={value.id}
                                 id={value.id} lastName={value.lastName}
                                  firstName={value.firstName} 
                                  email={value.email} gender={value.gender}
                                  birthDay = {value.birthDay}/>);
                        })
                );
            }
        }
    }
}
export default CardListProfile;