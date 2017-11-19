import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Home extends Component{    
    constructor(){
       super();
       this.state = {items:[]}     
   }
   componentWillMount(){  
    var _this = this;
    axios
    .get("https://swapi.co/api/people/?fformat=json")
    .then(function(result){
        _this.setState({
            items: result.data.results
          });
    });    
   }   
    render(){            
        return(
            <div>
            <MuiThemeProvider>
            <AppBar title="My AppBar" />            
          </MuiThemeProvider>
          <h4>esto es home</h4>
          </div>
        )     
    }   
}