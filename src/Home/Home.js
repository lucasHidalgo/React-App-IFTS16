import React, { Component } from 'react';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Album from '../Album/Album.js';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';



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
            <MuiThemeProvider>
            <div>
                <AppBar title="Galería de Fotos" onLeftIconButtonTouchTap= {() => this._toggleDrawer()} />
                <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>            
                    <List>
                <ListItem><Link to ='/Album'>Albums</Link> </ListItem>
                

              </List>

              </Drawer>
          <h4>esto es home</h4>
          </div>
          </MuiThemeProvider>
        )     
    }   
}