import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redA700, grey800} from 'material-ui/styles/colors';
import Album from '../Album/Album.js';
import {List, ListItem} from 'material-ui/List';
import Photos from '../Photos/Photos.js';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA700,
    accent1Color: grey800
  }
}); 

export default class GaleriaFotos extends Component{    
    constructor(){
       super();
       this.state = {}
            drawerOpened: false     
   };
   _toggleDrawer(){
      this.setState({
          drawerOpened: !this.state.drawerOpened
     });
   };

  
    render(){            
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title="Galería de Fotos" onLeftIconButtonTouchTap= {() => this._toggleDrawer()} />
                <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>            
                    <List>
                <ListItem>Lista de Albums </ListItem>
                <br/>
               <Album/>             
              </List>

              </Drawer>
              <Photos />
              </div>        
          </MuiThemeProvider>
        )     
    }   
}