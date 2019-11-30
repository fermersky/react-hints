import { combineReducers } from 'redux';
import hintsReducer from './hints';

export default combineReducers({
    hints: hintsReducer
});
