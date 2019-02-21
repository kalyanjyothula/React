import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/type';

import _ from 'lodash';

export default (state={},action) => {
    switch(action.type){
        case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};
        case DELETE_STREAM:
            return _.omit(state,action.payload);
        case CREATE_STREAM:
        case EDIT_STREAM:
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};
        default:return state;
    }
}