import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import postreducer from './postreducer';
import streamReducer from './streamReducer';

export const rootReducer = combineReducers({
    auth:postreducer,
    form:formReducer,
    streams:streamReducer
});