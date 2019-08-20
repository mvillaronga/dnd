import React from 'react';
import { createStore } from 'redux'

import dndApp from './redux/reducers'

import logo from './logo.svg';
import './App.css';
import { addNPC } from './redux/actions';
import NpcListController from './components/NpcListController';

// const store = createStore(dndApp)

// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addNPC('Bob'))
// store.dispatch(addNPC('Scanlan'))
// unsubscribe()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NpcListController />
      </header>
    </div>
  );
}

export default App;
