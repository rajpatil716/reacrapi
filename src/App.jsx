import React from 'react'

// import axios from 'axios';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (with Popper.js)
import Home from './Home';
import Navbar from './navbar';


const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      </>
  )
}

export default App
