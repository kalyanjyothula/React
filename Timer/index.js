import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        const var1=setInterval(
            () => this.current(),10
        );
    }
    componentWillMount(){
        clearInterval(this.var1);
    }
    current(){
        this.setState({date:new Date()});
    }
    render(){
        return(<div>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>);
    }
}
ReactDOM.render(
    <App/>,document.querySelector("#root")
);