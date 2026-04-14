import React, { Component } from "react";
import Movie from "../Movie/Movie";

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
        let storageParseado = JSON.parse(storage)
        console.log(storageParseado)
        let arrayFavoritos= []
        storageParseado.map(id=>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data => 
                {
                    arrayFavoritos.push(data)
                    this.setState(
                { datos: arrayFavoritos },
                console.log(this.state.datos)
            )})
            .catch(error => console.log(error))
        )
    }

    render(){
        return(
            <>
                  <h2 className="alert alert-primary">Peliculas Favoritas</h2>
                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((pelicula,idx)=> <Movie key={pelicula.id} data={pelicula}/>)
                    
                        
                    }
                </section>
            </>
        )
    }
}

export default Favoritos