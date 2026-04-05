import React, { Component } from 'react';

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            pagina: 1 
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=3f1682dada002836e815351506ac3816")
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
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form>
                <section className="row cards" id="movies">
                    { //NO ESTA TERMINADO
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> : this.state.datos.slice(0,4).map((datos,idx) =>
                        <>
                        <article class="single-card-tv">
                            <img src="" class="card-img-top" alt="..."/>
                            <div class="cardBody">
                                <h5 class="card-title"></h5>
                                <p class="card-text"></p>
                                <a href="serie.html" class="btn btn-primary">Ver más</a>
                            </div>
                        </article>
                        </>
                    )}
            
                </section>
                <button className="btn-ver-todas" onClick={() => this.cargarMas()}>Cargar más</button>
            </>
        );
    }
}

export default Series;