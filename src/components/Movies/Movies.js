import React, { Component } from "react";
import Movie from "../Movie/Movie";
import Filtro from "../Filtro/Filtro";

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            datosFiltrados:[],
            valor: "",
            cantidad: 4
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data.results,
                    datosFiltrados: data.results
                }
            ))
            .catch(error => console.log(error))
    }

    cargarMas() {
        this.setState({
            cantidad: this.state.cantidad + 4
        });
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value },
            () => { this.filtrarPeliculas(this.state.valor) }
        )
    }

    filtrarPeliculas(filtrada) {
        console.log(this.state.datos)
        this.setState({
            datosFiltrados: this.state.datos.filter((pelicula) => pelicula.original_title.toLowerCase().includes(filtrada.toLowerCase()))

        })
    }

    render() {
        return (

            <>
                <h2 className="alert alert-primary">Películas Populares</h2>
                <form className="search-form" onSubmit={(event) => this.enviarForm(event)}>
                    <input type="text" className="" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                </form>
                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                            <h3>Cargando...</h3> :
                            this.state.datosFiltrados.filter((datos, idx) => idx < 4).map((pelicula) => (<Movie key={pelicula.id} data={pelicula} />))
                    }
                </section>
                <button className="btn-ver-todas" onClick={() => this.cargarMas()}>Cargar más</button>
            </>
        )
    }
}

export default Movies;