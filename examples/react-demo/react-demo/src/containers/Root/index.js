import React from 'react';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import thunc from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers'

const store = createStore(
    rootReducer,
    applyMiddleware(thunc, createLogger())
);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;