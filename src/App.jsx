import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="container">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
