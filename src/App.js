import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter baseName="/nicole-portfolio">
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
