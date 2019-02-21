import React from 'react';
import {connect} from 'react-redux';

import {signIn,signOut} from './actions/index';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'601447172186-bpjeun2pbfo0e06fjvclg9iservnlltf.apps.googleusercontent.com',
                scope:'email'
            }).then(() =>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

     onAuthChange = (isSignedIn) =>{
        //console.log("hai")
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onsignInClick = () =>{
        this.auth.signIn()
    }
    onsignOutClick = () =>{
        //console.log(this.auth.isSignedIn.get());
        this.auth.signOut();
    }

    renderButtonValue(){
        if(this.props.isSigned === null){
            return null;
        }
        else if(this.props.isSigned){
            return(
                <button onClick={this.onsignOutClick} className="ui red google button buttongoogle">
                    <i className="google icon"/> SignOut
                </button>
            );
        }else{
            return(
                <button onClick={this.onsignInClick} className="ui red google button buttongoogle">
                    <i className="google icon"/> SignIn with Google
                </button>
            );
        }
    }

    render(){
        return(
            <span>{this.renderButtonValue()}</span>
        );
    }
}
const mapStateToProps = (state) =>{
    //console.log(state);
    return {
        isSigned:state.auth.isSigned,
        userId:state.auth.userId
    }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);