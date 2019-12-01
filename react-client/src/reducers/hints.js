import { handleActions } from 'redux-actions';
import {
    FETCH_HINT,
    REQUEST_HINT,
    RECIEVE_HINT,
    RECIEVE_HINTS
} from '../actions/hints';

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
        }),
        [RECIEVE_HINTS]: (state, action) => ({
            ...state,
            fetchingHint: false,
            hints: action.payload
        })
    },
    { currentHint: {}, fetchingHint: false, hints: [] }
);

export default hintsReducer;
