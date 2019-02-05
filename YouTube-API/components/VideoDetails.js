import React from 'react';
import '../css/index.css';
export default class VideoDetails extends React.Component{
    render(){
        if(!this.props.CurrentVideo){
            return <div>loading ...</div>;
        }
        let videoTitle=`https://www.youtube.com/embed/${this.props.CurrentVideo.id.videoId}`;
        return (
            <div className="add">
                <div>
                <iframe title={this.props.CurrentVideo.snippet.title} src={videoTitle} autoplay="1" width="670" height="400"/>
                </div>
                <div className="desc">
                    <h4>{this.props.CurrentVideo.snippet.title}</h4> 
                    <p>{this.props.CurrentVideo.snippet.description}</p>
                </div>
            </div>
            );
    }
}