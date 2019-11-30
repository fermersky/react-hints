import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './Root';

import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddlware = createLogger();
const store = createStore(
    combinedReducers,
    applyMiddleware(thunkMiddleware, loggerMiddlware)
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
