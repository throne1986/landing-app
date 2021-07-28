import React from 'react';
import logo from './logo.svg';
import { Viewport as WidgetEditor } from './features/editor/Viewport'
import {useEditor,  Editor, Frame, Element, useNode } from "@craftjs/core";
import './App.scss';

function App() {
  return (
    <Editor>
      <WidgetEditor />
    </Editor>
  );
}

export default App;
