import React from 'react';

// import logo from './logo.svg';
import './App.css';

import NpcListController from './components/Npc';
import AddPanel from './components/AddPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddPanel />
        <NpcListController />
      </header>
    </div>
  );
}

export default App;
