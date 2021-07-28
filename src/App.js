import React from 'react';
import logo from './logo.svg';
import {Viewport as WidgetEditor } from './features/editor/Viewport'
import './App.scss';

function App() {
  return (
    <div className="App">
      <WidgetEditor />
    </div>
  );
}

export default App;
