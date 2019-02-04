import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact  path="/" component={Home} />
                    <Route path="/FirstPage" component={FirstPage} />
                    <Route path="/Secondpage" component={SecondPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(
    <App/>,document.querySelector('#root')
);
