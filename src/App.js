import React from 'react';
import Header from './sections/Header';
import './main.scss'
import Tastes from './sections/Tastes';
import Tradition from './sections/Tradition';

function App() {
  return (
    <div className="App">
      <Header />
      <Tradition />
      <Tastes />
    </div>
  );
}

export default App;
