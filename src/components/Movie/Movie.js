import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false
        };
    }

    verMas() {
        this.setState({
            verMas: !this.state.verMas
        });
    }

    render() {
        return (
            <article className="single-card-movie">
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} 
                    className="card-img-top" 
                    alt={this.props.data.title}
                />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.overview}</p>
                    
                    <Link to={`/detallepelicula/id/${this.props.data.id}`}>
                        <button className="btn btn-primary" onClick={() => this.verMas()}>
                            {this.state.verMas ? "Ver menos" : "Ver mas"}
                        </button> 
                    </Link>
                    <a href="#/" className="btn alert-primary">♥️</a>
                </div>
            </article>
        );
    }
}

export default Movie;