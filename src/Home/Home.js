import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redA700, grey800} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA700,
    accent1Color: grey800
  }
}); 

export default class Home extends Component{    
  

 
    render(){            
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <h1>Bienvenidos a la Galería de Fotos Corteggiano Hidalgo</h1>
          <h3>En esta página podremos ver una serie de albums con las fotos que contiene cada uno de ellos.<br/> Podremos acceder a los albums en el menú deplegable que aparece en la Galería de Albums
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