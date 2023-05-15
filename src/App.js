import React, { useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';

function App() {


  return (
    <>
      <Header />
      <Products />
      <About/>
      <Footer/>
    </>
  )
}
export default App;
