import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react-router dep
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid} />
            <Route path ="/view/:postId" component={Single} />
        </Route>
    </Router>
);





render(
    <Provider store={store}>
        {router}
    </Provider>
    , document.getElementById('root'));