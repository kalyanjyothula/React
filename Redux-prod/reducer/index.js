import {combineReducers} from 'redux';

import post from './postreducer';
import user from './Userreducer';

export const rootReducer = combineReducers({
    posts:post,
    users:user
});