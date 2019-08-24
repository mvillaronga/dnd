import React from 'react';

// import logo from './logo.svg';
import './App.css';

import NpcListController from './components/Npc/NpcListController';
import AddPanel from './components/AddPanel/index'

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
