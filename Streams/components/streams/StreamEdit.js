import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchStream ,editStream} from '../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) =>{
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
        //console.log(this.props);
        if(!this.props.editStreamValues){
            return <div>Loading ..</div>;
        }return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm initialValues={_.pick(this.props.editStreamValues,'title','description')} onSubmit={this.onSubmit} />
            </div>
        );
        
    }
}

const mapStateToProps = (state,ownProps) => {
    //console.log(state);
    return {
        editStreamValues : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);