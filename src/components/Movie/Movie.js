import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: null 
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data => this.setState({ datos: data }))
            .catch(error => console.log(error));
    }

    render() {
        if (!this.state.datos) {
            return <h3>Cargando detalle...</h3>;
        }

        return (
            <>
                <h2 className="alert alert-primary">{this.state.datos.title}</h2>
                <section style={{ display: 'flex', gap: '30px', padding: '20px' }}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`}/>
                    <article className="info">
                        <h3>Descripción</h3>
                        <p>{this.state.datos.overview}</p>
                        <p><strong>Fecha de estreno:</strong> {this.state.datos.release_date}</p>
                        <p><strong>Duración:</strong> {this.state.datos.runtime} min</p>
                        <p><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                    </article>
                </section>
            </>
        );
    }
}

export default Movie;