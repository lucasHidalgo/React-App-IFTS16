import React, { Component } from 'react';
import axios from 'axios';

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
    })
    ;
   }

    render(){
        let items = this.state.items;
        return(<div>              
            {items.map(item => <h4 key={item.name}>{item.name}</h4>)}       
        </div>)
    }
    
}