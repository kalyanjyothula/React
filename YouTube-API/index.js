import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/SearchBar';
import '../src/css/index.css';
import api from './api';
import VideoList from '../src/components/VideoList';
import VideoDetail from '../src/components/VideoDetails';
class App extends React.Component{
    state={videos:[],SelectedVideo:null}
    OnGetData = async word =>{
       const response = await api.get('/search',{
            params:{
                q:word
            }
        });
        this.setState({videos:response.data.items, SelectedVideo:response.data.items[0]});
    }
    OnSelectedVideo = (videoObject) =>{
           this.setState({SelectedVideo:videoObject});
    };
    render(){
        return(
            <div>
                <h1>YouTube API Request</h1><hr/>
                <SearchBar OnMethod={this.OnGetData}/><hr/>
                <div >
                    <VideoDetail CurrentVideo ={this.state.SelectedVideo}/>
                    <VideoList OnSelectedVideo={this.OnSelectedVideo} OnListIs={this.state.videos}/>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));
/* retrieve the items we use async and await key words .. */