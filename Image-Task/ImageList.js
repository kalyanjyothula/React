import React from 'react';
import './index.css';

export default class ImageList extends React.Component{

    render(){
       return(
           <img src={this.props.Imgurl} alt={this.props.Imgalt}/>
       );
    }
}