import React from 'react';
import '../css/index.css';
export default class SearchBar extends React.Component{
    state = {word:""};
    GetText = e => {
        this.setState({word: e.target.value});
    }
    GetAction = e =>{
        e.preventDefault();
        this.props.OnMethod(this.state.word);
    }
    render(){
        return(
            <div className="INN">
                <form onSubmit={this.GetAction}>
                      <input type="text" value={this.state.word} onChange={this.GetText}/>
                </form>        
            </div>
        );
    }
}