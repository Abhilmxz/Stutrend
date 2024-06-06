import React from 'react';
import './App.css'
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from './components/about/About';
// import Hero from './components/home/hero/Hero';


const App = () => {
  return (
    <>
      <Router>
      <Header />
      {/* <Hero/>
      <About/> */}
      <Routes>
          <Route path='/' exact component={Home} />
          <Route path="/about" exact component={About} />
      </Routes>
      </Router>
    </>
  )
};

export default App;