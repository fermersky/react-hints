import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HintContainer from './containers/HintContainer';
import Header from './components/Header/Header';
import HintsListContainer from './containers/HintsListContainer';
import LoginContainer from './containers/LoginContainer';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Route exact path="/:author" component={HintsListContainer} />

                <Route exact path="/hint/:hintSlug" component={HintContainer} />
                <Route
                    exact
                    path="/hints/:filter?/:value?"
                    component={HintsListContainer}
                />
                <Route exact path="/" component={HintsListContainer} />
                <Route exact path="/login" component={LoginContainer} />
            </Router>
        </Provider>
    );
};

export default Root;
