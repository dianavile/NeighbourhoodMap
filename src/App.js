import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Locations from './Locations.js';
import Map from './Map.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Locations />
         <Map />
         <Footer />
      </div>
    );
  }
}

export default App;
