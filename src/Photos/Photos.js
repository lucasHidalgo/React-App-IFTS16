import React, { Component } from 'react';
import axios from 'axios'; 

export default class Photos extends Component{
    constructor(){
		super();
		this.state = { photos:[] };
	}
	   
	componentWillMount(){	
		var _this = this;
		axios
		.get("https://jsonplaceholder.typicode.com/photos")
		.then(function(result){		
			_this.setState({
				photos: result.data
			  });
		});
	   }


    render(){
        return(<div>
           (Desde la clase Photos) Aca van las fotos
        </div>)
    }
    
}
