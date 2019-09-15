import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { configureStore } from 'redux-starter-kit'

import npcSlice from './redux/npcs'
import referenceSlice from './redux/reference'
import spellSlice from './redux/spells'
import filterSlice from './redux/filter'

import { fetchSpellReference } from './redux/reference';

import './index.css';
import App from './App';

const store = configureStore({
    reducer: {
        npcs: npcSlice.reducer,
        refs: referenceSlice.reducer,
        selection: spellSlice.reducer,
        filter: filterSlice.reducer
    }
})

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
