import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{
   /* constructor(props){
        super(props);
        this.state={ lat: null,ErrorMessage:null};
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err => {
                this.setState({ErrorMessage:err.message});
            }
        );
    }*/
    state={lat : null,ErrorMeassgae:null};
    
    render(){
        //const op = '123';
       if(!this.state.lat && !this.state.ErrorMessage ){
           return(<div><Spinner/></div>);
       }else if(this.state.lat && !this.state.ErrorMessage){
           return(
               <div><SeasonDisplay lat={this.state.lat}/></div>
           );
       }else{
           return(<div>Error : {this.state.ErrorMessage}</div>);
       }

    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err => {
                this.setState({ErrorMessage:err.message});
            }
        );
    }
}
ReactDOM.render(
    <App/>,document.querySelector("#root")
);