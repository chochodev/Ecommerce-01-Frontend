import React from 'react';
import 'remixicon/fonts/remixicon.css';

import Home from './components/Home';

import './App.css';

import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './templates/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;