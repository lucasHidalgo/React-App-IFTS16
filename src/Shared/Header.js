import React, { Component } from 'react';
import Home from '../Home/Home.js';
import Posts from '../Posts/Posts.js';
import GaleriaFotos from '../GaleriaFotos/GaleriaFotos.js';
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
<Link to ='/GaleriaFotos'>Galeria de albums</Link>   
<Link to ='/Comentarios'>Comentarios</Link>
          </nav>
      <Route exact path='/' component={Home}/>
      <Route  path='/GaleriaFotos' component={GaleriaFotos}/>      
      <Route  path='/Comentarios' component={Posts}/>
      </div>
        </Router>  
           </header>
        )
     
    }
    
}