import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HintContainer from './containers/HintContainer';
import Header from './components/Header/Header';
import ListHintsContainer from './containers/ListHintsContainer';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Route
                    except
                    path="/hints/:filter/:value"
                    component={ListHintsContainer}
                />
                <Route
                    except
                    path="/hint/:hintSlug"
                    component={HintContainer}
                />
            </Router>
        </Provider>
    );
};

export default Root;
