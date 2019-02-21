import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import {rootReducer} from './reducer/index';
import { applyMiddleware } from 'redux';


const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getelementById('root')
    );

