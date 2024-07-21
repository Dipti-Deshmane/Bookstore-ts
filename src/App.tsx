import React from 'react';
import './App.css';
import Header from './Components/Header';
import BookCard from './Components/BookCard';
import BookDetails from './Components/BookDetails';

function App() {
  return (
    <div>
      <Header />
      <BookDetails/>
    </div>
  );
}

export default App;
