import { combineReducers } from 'redux';
import hintsReducer from './hints';
import authReducer from './auth';

export default combineReducers({
    hints: hintsReducer,
    auth: authReducer
});
