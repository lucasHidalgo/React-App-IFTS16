import React, { Component } from 'react';
import axios from 'axios';
import Home from '../Home/Home.js';
import '../App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Photos from '../Photos/Photos.js';
import { } from '../Photos/Photos.js';
import Album from '../Album/Album.js';
import Posts from '../Posts/Posts.js';
import $ from 'jquery';

export default class GaleriaFotos extends Component{

	constructor(){
       super();
       this.state = {items:[]}
            drawerOpened: false     
   };
   
	render(){
		return(
			<header>
               <Router>
          <div>
          <nav>
          	<Link to ='/'>Home</Link>      
		  	<Link to ='/Album/Comentarios'>Comentarios</Link>
          </nav>
          <Route exact path='/' component={Home}/>
      	  <Route  path='/Album' component={Album}/>      
          <Route  path='/Album/Comentarios' component={Posts}/>
      <Photos/>
      	</div>
        </Router>  
           </header>


			)
	}
}
