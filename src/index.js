import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import  { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import dndApp from './redux/reducers'
import { fetchSpellReference } from './redux/reference/actions';

import './index.css';
import App from './App';


const loggerMiddleware = createLogger()

const store = createStore(
    dndApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

//prepopulate
store.dispatch(fetchSpellReference())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
