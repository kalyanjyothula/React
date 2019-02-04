import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
class Apps extends React.Component{
    state={text:'Enter Text Below'};
    render(){
        return(
            <div>
                <div className="showtext">
                    <h1>{this.state.text}</h1>
                </div>
                <div className="maindiv">
                    <form>
                        <label htmlFor="Enter">Enter Text   :</label>
                        <input type="text"  name="Enter"  onChange={(event)=>{this.setState({text:event.target.value});}}/>
                    </form>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Apps/>,
    document.querySelector("#root")
);