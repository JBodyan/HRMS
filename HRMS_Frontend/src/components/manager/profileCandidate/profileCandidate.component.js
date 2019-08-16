import React from 'react';
import { history } from '../../../_helpers/history';
import 'babel-polyfill';
import {authHeader} from "../../../_helpers/authHeader";
import config from 'config';
import Card from "@material-ui/core/Card";
import TextField from "../../admin/users/userProfile/userProfile.component";

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

export class ProfileCandidate extends React.Component{

     constructor(props){
         super(props);
         this.state={
             id: this.props.match.params,
             member: {},
             isLoadedMember: false
         };
         history.push('/profile/'+this.props.match.params.id);
     }

    componentDidMount() {
        this.loadMember(this.props.match.params.id);
    }

    loadMember = id =>{
        console.log(id);
        let auth = authHeader();
        fetch(`${config.apiUrl}/api/Member/GetMember/${id}`,{
            method: 'get',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': auth.Authorization
                }
        })
            .then( result => result.json().then((result)=>{
                    console.log(result);

                    this.setState({
                        member: result,
                        isLoadedMember: true
                    });
                }),
                (error) => {
                    alert(error);
                }
            )
    };

    render(){
        return (
            <div>
                <h5>CandidateProfile</h5>
                <div className="container" style={ContainerStyle}>
                    <div>{this.state.member.firstName} {this.state.member.secondName} {this.state.member.lastName}</div>
                    <div>Birth: {this.state.member.birthDate}</div>
                    <div>Skype: {this.state.member.skype}</div>
                    <div>Phone: {this.state.member.phone}</div>
                </div>
            </div>
        )

    }
}
export default ProfileCandidate;