import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Favorito extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                           Ver mas
                    </Link>
                </div>
            </article>
        );
    }
}

export default Favorito;