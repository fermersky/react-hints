import { handleActions } from 'redux-actions';
import { RECIEVE_TOKEN, SET_ERROR_TEXT, RESET_USER } from '../actions/auth';

const authReducer = handleActions(
    {
        [RECIEVE_TOKEN]: (state, action) => ({
            ...state,
            userInfo: action.payload,
            error: ''
        }),
        [SET_ERROR_TEXT]: (state, action) => ({
            ...state,
            error: action.payload,
            token: ''
        }),
        [RESET_USER]: (state, action) => ({
            ...state,
            token: '',
            userInfo: {}
        })
    },
    {
        userInfo: { token: '', user_id: '', name: '' },
        error: ''
    }
);

export default authReducer;
