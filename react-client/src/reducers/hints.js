import { handleActions } from 'redux-actions';
import { FETCH_HINT, REQUEST_HINT, RECIEVE_HINT } from '../actions/hints';

const hintsReducer = handleActions(
    {
        [FETCH_HINT]: (state, action) => ({
            ...state,
            currentHint: action.payload
        }),
        [REQUEST_HINT]: (state, action) => ({
            ...state,
            fetchingHint: true
        }),
        [RECIEVE_HINT]: (state, action) => ({
            ...state,
            fetchingHint: false,
            currentHint: action.payload
        })
    },
    { currentHint: {}, fetchingHint: false }
);

export default hintsReducer;
