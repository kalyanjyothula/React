//concepts : state , events 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Apps extends React.Component{
    constructor(props){
        super(props);
        this.state={Name:'',ID:'',Mail:''};
    }
/*
version on bind method in js event
    Ex : 
    MYFUN(){

    }

    onclick={this.MYFUN.bind(this);}
version 2 : bind funtion in constructor
version 3: use => funtion defination
Ex : const MYFUN  = ()=>{ this.props.var;}
*/
    render(){
        return(
            <div>
                <div className="first">
                    <h1>Create Account</h1>
                    <div>
                        <form>
                            <label htmlFor='name'>Name :</label>
                            <input type='text' name='name'  value={this.state.Name} onChange={(e) => {this.setState({Name: e.target.value});}}/><br/>
                             <label htmlFor='ID'>ID No :</label>
                            <input type='text' name='ID' value={this.state.ID} onChange={(e) => {this.setState({ID: e.target.value});}}/><br/>
                            <label htmlFor='Class'>Class :</label>
                            <input type='text' name='Class' value={this.state.Mail} onChange={(e) => {this.setState({Mail: e.target.value});}}/><br/>
                            <button type="submit"  value="Submit" onClick={(e)=>{alert("  Name:"+this.state.Name+"\n  ID :"+this.state.ID+"\n  Class :"+this.state.Mail);}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Apps/>,document.getElementById('root'));