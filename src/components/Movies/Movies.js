import React, { Component } from 'react';
import Ppopulares from '../Ppopulares/Ppopulares';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            pagina: 1 
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816")
            .then(res => res.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(err => console.log(err));
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    datos: this.state.datos.concat(data.results), 
                    pagina: this.state.pagina + 1 
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h2 className="alert alert-primary">Todas las películas</h2>
                <form className="filter-form">
                    <input type="text" placeholder="Buscar pelicula" />
                </form>
                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((pelicula, idx) => (
                            <Ppopulares key={pelicula.id + '-' + idx} data={pelicula} />
                        ))
                    }
                </section>
                <button className="btn-ver-todas" onClick={() => this.cargarMas()}>Cargar más</button>
            </>
        );
    }
}

export default Movies;