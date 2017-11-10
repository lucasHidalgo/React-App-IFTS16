import React, { Component } from 'react';
import $ from 'jquery'; 


export default class Album extends Component{
	   state = {
	     userId: 20,
       	id: 20,
    	 title: ""
	   }
componentWillMount(){
	var url = 'https://jsonplaceholder.typicode.com';

		fetch(url + "/albums/1")
		.then(respuesta => respuesta.json())
		.then((datos) =>{
			
				this.setState({
		 		 userId: datos.userId,
		      	 	id: datos.id,
		    	 title: datos.title
		 	});
		});
}


    render(){
        return(<div>
       <p>titulo : {this.state.title}</p>
        <p>titulo : {this.state.userId}</p>
         <p>titulo : {this.state.id}</p>
   
               
        </div>
        )
    }
    
}
