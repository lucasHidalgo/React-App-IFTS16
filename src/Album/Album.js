import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialogo from '../Material-ui/dialog';
import Photos from '../Photos/Photos.js';
import {List, ListItem} from 'material-ui/List';



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
			Photos.prototype.filtrarFotos(id)
			console.log("Usted selecciono el album " + id);									
		}
    render(){
		let albums = this.state.albums;		
        return(					
		<div>		
															
				{albums.map(album => 
					<ListItem key={album.id}> 	
				<div key={album.id}>
				<h4>{album.title}</h4>	
				<MuiThemeProvider>
				<span onClick={() => this.obtenerFotos(album.id)}> <Dialogo/></span>
			 </MuiThemeProvider>								
			 <hr style={{width : 600}}/>
				 </div>		
				 </ListItem>									
				)} 
				     	 	       
        </div>
        )
    }
    
}
