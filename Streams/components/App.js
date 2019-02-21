import React from 'react';
import {Router ,Route,Switch} from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

class App extends React.Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <div><Header/>
                        <div>
                            <Switch>
                                <Route path="/" exact component={StreamList}/>
                                <Route path="/streams/new" exact render={()=><StreamCreate/>}/>
                                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                                <Route path="/streams/:id" exact component={StreamShow}/>
                            </Switch>
                        </div>                    
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;