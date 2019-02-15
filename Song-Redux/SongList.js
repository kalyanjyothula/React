import React from 'react';
import { connect } from 'react-redux';
import imgpath from '../src/file.png';

import {songSelected} from './actions/index';
import SongDetails from './SongDetails';
import {Button, Ptag , Container, Img} from './css/element.index';

class SongList extends React.Component{

    data = this.props.songs.map( mp => 
        <Container key={mp.title}>
            <Img src={imgpath} alt='no'/>
            <Ptag>{mp.title}</Ptag>
            <Ptag>{mp.singer}</Ptag>
            <Ptag>{mp.duration}</Ptag>
            <Button onClick={()=>this.props.songSelected(mp)}>SET</Button>
        </Container>
    );

    render(){
        return(
            <React.Fragment>
                <SongDetails/><hr/>
                <div>{this.data}</div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) =>{
    //console.log(state);
    return {songs: state.songs};
}

export default connect(mapStateToProps,{songSelected})(SongList);