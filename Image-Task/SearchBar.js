import React from 'react';

export default class SearchBar extends React.Component{
    state = {term:''};
    newLocal = (event) =>{
        event.preventDefault();
        this.props.OnSubmitParent(this.state.term);
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1>API REQUEST</h1><hr/> 
                    <form onSubmit={this.newLocal}>
                      <p>Image Search</p> <input type="text" value={this.state.term} onChange={(e) => {this.setState({term:e.target.value})}}/><hr/>
                    </form>
                   
                </div>
            </React.Fragment>
        );
    }
}