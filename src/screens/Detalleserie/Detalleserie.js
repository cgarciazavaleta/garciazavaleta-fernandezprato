import React, { Component } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Detalleserie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: {},
            favoritosSerie: false
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    serie: data
                },
                    () => {
                        let storage = localStorage.getItem('favoritosSerie');
                        if (storage) {
                            console.log("llego")
                            let favParseado = JSON.parse(storage);
                            if (favParseado.includes(this.state.serie.id)) {
                                this.setState({
                                    favoritosSerie: true
                                })
                            }
                        }
                    }
                )
            })
            .catch(error => console.log(error))


    }

    agregarFavoritoSerie(id) {
        let storage = localStorage.getItem('favoritosSerie')
        let favParseado = JSON.parse(storage)
        let favoritosSerie = []
        if (favParseado !== null) {
            favParseado.push(id)
            let storageParseado = JSON.stringify(favParseado)
            localStorage.setItem('favoritosSerie', storageParseado)

        }
        else {
            let array = [id]
            let storageParseado = JSON.stringify(array)
            localStorage.setItem('favoritosSerie', storageParseado)
        }
        this.setState({
            favoritosSerie: true
        })
    }
    sacarFavoritoSerie(id) {
        let storage = localStorage.getItem('favoritosSerie')
        let favParseado = JSON.parse(storage)
        let favFiltrados = favParseado.filter(pelicula => pelicula != id)
        let storageParseado = JSON.stringify(favFiltrados)
        localStorage.setItem('favoritosSerie', storageParseado)
        this.setState({
            favoritosSerie: false
        })
    }

    render() {
        let usuarioLogueado = cookies.get("usuarioCookies");
        return (
            <>
                <section>
                    {!this.state.serie.name ?
                        (<h3>Cargando...</h3>) : (
                            <>
                                <h2 className="alert alert-primary">{this.state.serie.name}</h2>
                                <section className="row">
                                    <img className="col-md-6"
                                        src={`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`}
                                        alt={this.state.serie.name} />
                                    <section className="col-md-6 info">
                                        <h3>Descripción</h3>
                                        <p className="description">{this.state.serie.overview}</p>
                                        <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.serie.first_air_date}</p>
                                        <p className="mt-0 mb-0 length"><strong>Temporadas:</strong> {this.state.serie.number_of_seasons}</p>
                                        <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.serie.vote_average}</p>
                                        {usuarioLogueado ?
                                            <div>
                                                {this.state.favoritosSerie ?
                                                    <button className="btn alert-primary" onClick={() => this.sacarFavoritoSerie(this.state.serie.id)}>
                                                        💔
                                                    </button> :
                                                    <button className="btn alert-primary" onClick={() => this.agregarFavoritoSerie(this.state.serie.id)}>
                                                        ♥️
                                                    </button>}
                                            </div>
                                            : null}
                                    </section>
                                </section>
                            </>
                        )}
                </section>
            </>
        )
    }
}


export default Detalleserie