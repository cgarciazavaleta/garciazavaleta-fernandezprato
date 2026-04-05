import React, { Component } from "react";
import Movie from "../Movie/Movie";

class Movies extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos: [],
            cantidad: 4
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data => this.setState(
                { datos: data.results }
            ))
            .catch(error => console.log(error))
    }

cargarMas() {
        this.setState({
            cantidad: this.state.cantidad + 4
        });
    }

    render(){
        return(
            <>
                <h2 className="alert alert-primary">Películas</h2>
                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.slice(0, this.state.cantidad).map((pelicula) =>
                            <Movie key={pelicula.id} data={pelicula} />
                        )
                    }
                </section>
               <button className="btn-ver-todas" onClick={() => this.cargarMas()}>Cargar más</button>
            </>
        )
    }
}

export default Movies;