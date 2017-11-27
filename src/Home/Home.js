import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redA700, grey900} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA700,
    accent1Color: grey900
  }
}); 

export default class Home extends Component{    
  

 
    render(){            
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>

                <div id="main">
              <h3 className="texto">Bienvenidos a la Galería de Fotos Corteggiano - Hidalgo</h3>
          <h5 className="texto">En este proyecto hay una galeria de fotos que trae todos los albums de 
          https://jsonplaceholder.typicode.com, <br/> al seleccionar un album los filtra de acuerdo
          al "AlbumId". <br/>
          <br/>
          Este proyecto esta hecho con la libreria React. Cuenta con Material-Ui y Axios para traer los JSON.<br/>
          GitHub: https://github.com/lucasHidalgo/React-App-IFTS16
          </h5>
          </div>

          </div>
          </MuiThemeProvider>
        )     
    }   
}