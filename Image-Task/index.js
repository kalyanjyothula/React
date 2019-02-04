import React from 'react';
import ReactDOM from 'react-dom';
import RequestApi from './requestApi';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state={images:[]}
    ParentActionMethod = async(term) =>{
        //api access
        const response = await RequestApi.get('search/photos',{
            params:{query:term},
            headers:{
                Authorization: 'Client-ID 3a942e75b3cdd850b7c8806aca57b950323474f6a684e5cb0040ba65344ee987'
            }
        });
        this.setState({images:response.data.results});
    }
    render(){
        return(
            <React.Fragment>
                <SearchBar OnSubmitParent={this.ParentActionMethod} />
                {this.state.images.map((m)=> <ImageList Imgurl={m.urls.regular} Imgalt={m.description}/>)}
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
