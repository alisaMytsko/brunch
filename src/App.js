import React from 'react';
import Header from './sections/Header';
import './main.scss'
import Tastes from './sections/Tastes';
import Tradition from './sections/Tradition';
import Plate from './sections/Plate';

function App() {
  return (
    <div className="App">
      <Header />
      <Tradition />
      <Tastes />
      <Plate />
    </div>
  );
}

export default App;
