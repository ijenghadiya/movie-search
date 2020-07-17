import React from 'react';
import './index.css';

import MovieHead from './components/MovieHead';

const dotenv=require('dotenv').config()

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <MovieHead />
    </div>
  );
}

export default App;
