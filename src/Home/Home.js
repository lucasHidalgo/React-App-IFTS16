import React, { Component } from 'react';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redA700, grey800} from 'material-ui/styles/colors';
import Album from '../Album/Album.js';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Posts from '../Posts/Posts.js';
import Photos from '../Photos/Photos.js';
import GaleriaFotos from '../GaleriaFotos/GaleriaFotos.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA700,
    accent1Color: grey800
  }
}); 

export default class Home extends Component{    
    constructor(){
       super();
       this.state = {items:[]}
            drawerOpened: false     
   };
   _toggleDrawer(){
      this.setState({
          drawerOpened: !this.state.drawerOpened
     });
   };

   componentWillMount(){  
    var _this = this;
    axios
    .get("https://swapi.co/api/people/?fformat=json")
    .then(function(result){
        _this.setState({
            items: result.data.results
          });
    });    
   };   
    render(){            
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <h1>Bienvenidos a la Galería de Fotos Corteggiano Hidalgo</h1>
          <h3>En esta página podremos ver una serie de albums con las fotos que contiene cada uno de ellos.<br/> Podremos acceder a los albums en el menú deplegable que aparece arriba a la izquierda
          de la página, ahí dentro podremos ver los albums y seleccionando el boton "Ver Fotos" podremos
          acceder al contenido de cada uno de ellos.<br/>
          <br/>
          Vea los albums, elija el que mas le guste de acuerdo a su estilo, vea sus fotos y disfrute! 
          </h3>
          </div>
          </MuiThemeProvider>
        )     
    }   
}