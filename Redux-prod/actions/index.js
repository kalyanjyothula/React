import {reverse} from '../api/axiosapi';
import _ from 'lodash';


export const fetchPostandUser = () => async (dispatch,getState) =>{
    await dispatch(fetchData());

    // const userId = _.uniq(_.map(getState().posts,'userId'));

    // userId.forEach(id => dispatch(fetchUser(id)));
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

export const fetchData = () => async dispatch => {
        const response = await reverse.get('/posts');
        dispatch({
            type:'FETCH_POSTS',
            payload:response.data
        });
}
export const fetchUser = id => async dispatch => {
    const response = await reverse.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    });
}

// export const fetchUser = id => dispatch => {
//     _fectUser(id,dispatch);
// }
//  const _fectUser = _.memoize(async(id,dispatch)=> {
//     const response = await reverse.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:response.data
//     });
//  })