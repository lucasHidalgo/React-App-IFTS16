import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialogo from '../Material-ui/dialog';



export default class Album extends Component{
	constructor(){
		super();
		this.state = { albums:[] };
	}
	   
	componentWillMount(){	
		var _this = this;
		axios
		.get("https://jsonplaceholder.typicode.com/albums")
		.then(function(result){		
			_this.setState({
				albums: result.data
			  });
		});
	   }

	   obtenerFotos(id){
				console.log("Usted selecciono el album " + id);
				/*
				Hacer que este metodo filtre las fotos de acuerdo al id del parametro.
				axios.get(fotos).then((respuesta=> DIALOGO.setState({
					photos: result.data
				});
				let fotosPorId = DIALOGO.state.photos;
				fotosPorId.filter(foto => ...logica del filter.)	
			)
				*/						
	   }

    render(){
		let albums = this.state.albums;		
        return(					
		<div>					 											
	            {albums.map(album => 
				<div key={album.id}>
				<h4>{album.title}</h4>	
				<MuiThemeProvider>
				<span onClick={() => this.obtenerFotos(album.id)}> <Dialogo/></span>
			 </MuiThemeProvider>							
				</div>				
				)}             
        </div>
        )
    }
    
}
