import React from 'react';
import { history } from '../../../_helpers/history';
import 'babel-polyfill';
import {authHeader} from "../../../_helpers/authHeader";
import config from 'config';

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
        const {member} = this.state.member;
        return (<div>{member.firstName}</div>)

    }
}
export default ProfileCandidate;