import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../Home/Home.js';
import Album from '../Album/Album.js';
import Posts from '../Posts/Posts.js';
import '../App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';

export default class Header extends Component{      
    render(){            
        return(
           <header>
               <Router>
          <div>
          <nav>
      <Link to ='/'>Home</Link>
      <Link to ='/Album'>Albums</Link>      
      <Link to ='/Album/Comentarios'>Comentarios</Link>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route  path='/Album' component={Album}/>      
      <Route  path='/Album/Comentarios' component={Posts}/>
      </div>
        </Router>  
           </header>
        )
     
    }
    
}