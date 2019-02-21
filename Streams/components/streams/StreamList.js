import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchStreams} from '../actions/index';

class StreamList extends React.Component{

    componentDidMount(){
       // console.log(this.props,"list")
        this.props.fetchStreams();
        
    }

    renderEnableuserButton(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`streams/edit/${stream.id}`} className="ui button blue">Edit</Link>
                    <Link to= {`streams/delete/${stream.id}`} className="ui button red">Delete</Link>
                </div>
            );
        }
    }

    renderCreateStreamButton(){
        if(this.props.isuserSignedIn){
            return(
                <div className="createstream">
                    <Link to="/streams/new" className="ui button primary">Create Stream
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(data => {
            return(
                <div className="item" key={data.id}>
                    {this.renderEnableuserButton(data)}
                    <i className ="large middle aligned icon camera lightred"/>
                    <div className="content">
                       <Link to={`streams/${data.id}`} className="pophead">{data.title}</Link> 
                        <div className="description">{data.description}</div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h2 className="item">Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateStreamButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state.streams);
    return {
        streams: Object.values(state.streams),
        currentUserId:state.auth.userId,
        isuserSignedIn:state.auth.isSigned
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);