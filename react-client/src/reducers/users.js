import { handleActions } from 'redux-actions';
import { RECIEVE_USER, RECIEVE_USER_IMAGE } from '../actions/users';

const usersReducer = handleActions(
    {
        [RECIEVE_USER]: (state, action) => ({
            ...state,
            user: action.payload
        }),
        [RECIEVE_USER_IMAGE]: (state, action) => ({
            ...state,
            imageUrl: action.payload
        })
    },
    { imageUrl: {}, user: {} }
);

export default usersReducer;
