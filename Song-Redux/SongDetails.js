import React from 'react';
import {connect} from 'react-redux';
import {  DetailImg, Container, Container1 } from './css/element.index';
import Imgpath from './file.png';

class SongDetails extends React.Component{
    details =(data)=>{ 
        if(!data){
            return <Container>
            <DetailImg src={Imgpath} alt="selected"/>
            <Container1>Song Title</Container1>
            <Container1>Time Duration</Container1>
            <Container1>Singer</Container1>
        </Container>;
        }
        return(
            <Container>
                <DetailImg src={Imgpath} alt="selected"/>
                <Container1>{data.title}</Container1>
                <Container1>{data.duration}</Container1>
                <Container1>{data.singer}</Container1>
            </Container>
        );
    }

    render(){
        return(
            <div>
                {this.details(this.props.mySong)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return ({mySong:state.option});
}

export default connect(mapStateToProps)(SongDetails);