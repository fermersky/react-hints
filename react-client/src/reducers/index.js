import { combineReducers } from 'redux';
import hintsReducer from './hints';
import usersReducer from './users';

export default combineReducers({
    hints: hintsReducer,
    users: usersReducer
});
