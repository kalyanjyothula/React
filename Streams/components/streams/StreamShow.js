import React from 'react';
import {connect} from 'react-redux';

import {fetchStream} from '../actions';

class StreamShow extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if(!this.props.currentStream){
            return <div>Loading ...</div>;
        }
        const {title,description} =this.props.currentStream;
        return(
            <div>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        );
    }
}

const mapStateToprops = (state,ownprops) =>{
    return{
        currentStream:state.streams[ownprops.match.params.id]
    }
}

export default connect(mapStateToprops,{fetchStream})(StreamShow);