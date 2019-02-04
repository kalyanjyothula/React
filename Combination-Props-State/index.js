import React from 'react';
import ReactDOM from 'react-dom';
import Details from './details';
export default class App extends React.Component{
    state={
        marks:[
            {id:'R141080', Marks:'-' , Grade:'-'},
            {id:'R141191', Marks:'-' , Grade:'-'},
            {id:'R141632', Marks:'-',  Grade:'-'}
        ]
    };
    NewUpdate = (oops) => {
       let output = this.state.marks.map((m) =>{
            if(m.id === oops.id){
                m.Marks=oops.Marks;
                m.Grade=oops.Grade;
            }
            return m;
        })
        this.setState({marks:output});
    }
    render(){
        return(
            <div>
                {this.state.marks.map((oops) => <Details id ={oops.id} oops={oops} Method={this.NewUpdate}/> )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));