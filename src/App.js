import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Home from './Home/Home.js';
import Album from './JSON/Album.js';
import Photos from './JSON/Photos.js';
import Posts from './JSON/Posts.js';
import $ from 'jquery'; 


class App extends Component {
  render() {
    return (      
      <div className="App">
        <Router>
          <div>
          <nav>
      <Link to ='/'>Home</Link>
      <Link to ='/Album'>Albums</Link>
      <Link to ='/Album/Fotos'>Fotos</Link>
      <Link to ='/Album/Comentarios'>Comentarios</Link>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route  path='/Album' component={Album}/>
      <Route  path='/Album/Fotos' component={Photos}/>
      <Route  path='/Album/Comentarios' component={Posts}/>
      </div>
        </Router>              
      </div>
    );
  }
}

export default App;
