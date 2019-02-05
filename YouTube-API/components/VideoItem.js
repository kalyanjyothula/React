import React from 'react';
import '../css/index.css';
export default class VideoItem extends React.Component{
    render(){
        return(
            <div>
                <div>
                <div className="nh" onClick={() => {this.props.OnSelectedVideo(this.props.Name)}}>
                  <img src={this.props.Name.snippet.thumbnails.medium.url} alt="thumbnails"/>
                   {this.props.Name.snippet.title}
                   <hr/>
                </div>
                </div>
            </div>
        );
    }
}