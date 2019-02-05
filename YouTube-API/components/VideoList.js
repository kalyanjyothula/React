import React from 'react';
import VideoItem from './VideoItem';
export default class VideoList extends React.Component{
    render(){
        return(
            <div className="sub">
                {this.props.OnListIs.map((x) => {
                return <VideoItem key={x.id.videoId} Name={x} OnSelectedVideo={this.props.OnSelectedVideo}/>
                })}
            </div>
        );
    }
}