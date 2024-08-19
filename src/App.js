import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Lorem from './templates/Lorem';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />

          <Route path='/lorem/:id' element={<Lorem/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;