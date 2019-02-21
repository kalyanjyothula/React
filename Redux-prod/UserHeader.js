import React from 'react';
import {connect} from 'react-redux';

// import {fetchUser} from './actions/index';


class UserHeader extends React.Component{
    // componentDidMount(){
    //     this.props.fetchUser(this.props.Tagid);
    // }
    render(){
        const { userName} = this.props;
        
        if(!userName) return <span>Loading ...</span>;
        return(<span>{userName.name}</span>);
    }
}
const mapStateToProps = (state,ownProps) =>{
    //console.log(state);
    return {
        userName:state.users.find ( user => ownProps.Tagid === user.id )
    };
}

export default connect(mapStateToProps)(UserHeader);