import React, { Component } from 'react';
import $ from 'jquery'; 


export default class Album extends Component{
	constructor(){
		super();
		this.state = { albums:[] };
	}
	   
componentWillMount(){
	var url = 'https://jsonplaceholder.typicode.com';

		fetch(url + "/albums/1")
		.then(respuesta => respuesta.json())
		.then(({datos: albums}) =>{			
				this.setState({albums});
		});
}
    render(){
		let albums = this.state.albums;
		console.log(albums);
        return(<div>
	                        
        </div>
        )
    }
    
}
