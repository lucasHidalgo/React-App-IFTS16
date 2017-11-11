import React, { Component } from 'react';
import $ from 'jquery'; 

export default class Home extends Component{
   constructor(){
       super();
       this.state = {items:[]}
   }
   componentWillMount(){
       fetch('https://swapi.co/api/people/?fformat=json')
       .then( response => response.json() )
       .then( ({results : items}) => this.setState({items}))
   }

    render(){
        let items = this.state.items;
        return(<div>              
            {items.map(item => <h4 key={item.name}>{item.name}</h4>)}       
        </div>)
    }
    
}