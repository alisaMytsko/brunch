import React from 'react';
import Header from './sections/Header';
import './main.scss'
import Tastes from './sections/Tastes';
import Tradition from './sections/Tradition';
import Plate from './sections/Plate';
import Cuisine from './sections/Cuisine';
import Discover from './sections/Discover';
import Book from './sections/Book';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Tradition />
      <Tastes />
      <Plate />
      <Cuisine />
      <Discover />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
