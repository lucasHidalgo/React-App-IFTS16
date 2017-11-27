import React, { Component } from 'react';
import './App.css';
import Header from './Shared/Header.js';
import Footer from './Shared/Footer.js';





class App extends Component {
  render() {
    return (      
      <div className="App">
            <Header />
            
            <Footer />  
      </div>
    );
  }
}

export default App;
