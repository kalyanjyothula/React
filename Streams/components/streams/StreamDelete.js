import React from 'react';
import {connect} from 'react-redux';

import Modal from '../Modal';
import {Link} from 'react-router-dom';
import history from '../../history';
import {fetchStream,deleteStream} from '../actions/index';

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        //console.log(this.props);
    }
    
    renderContent(){
        //console.log(this.props.deleteStreamValue);
        if(!this.props.deleteStreamValue){
            return "Loading ...";
        }
        return `Are You want to delete ${this.props.deleteStreamValue.title} ?`;
    }

    actions(){
       
        const {id} =this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=> this.props.deleteStream(id)} className="ui button red">Delete</button>
                <Link to ="/" className="ui button primary">Cancel</Link>
            </React.Fragment>
        );
    };
    
    render(){
        if(!this.props.deleteStreamValue){
            return "Loading ...";
        }
        return(
           <div className="makeit">
               <Modal title="Delete Stream"
               content={this.renderContent()}
               action={this.actions()}
               onDismiss={() => history.push('/')}
               />
           </div>
        );
    }
}

const mapStatetoProps = (state,ownProps) =>{
    return{
        deleteStreamValue:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStatetoProps,{fetchStream,deleteStream})(StreamDelete);