import React from 'react';
import { history } from '../../../_helpers/history';
import 'babel-polyfill';

export class ProfileCandidate  extends React.Component{

     constructor(props){
         super(props);
         this.state={
            id: this.props.match.params
         }
         history.push('/profile/'+this.props.match.params.id);
     }

    render(){
        const {id} = this.state.id;
        return (<div>{id}</div>);
    }
}
export default ProfileCandidate;