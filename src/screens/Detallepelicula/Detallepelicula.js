import React, {Component} from 'react'

class Detallepelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            personaje: {}
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data=> this.setState({
                personaje: data
            }))
            .catch(error => console.log(error))
    }
    render(){
        return(
            <>
           <section>
            {!this.state.personaje.title?
            (<h3>Cargando...</h3>): (
            <>
                <h2 className="alert alert-primary">{this.state.personaje.title}</h2>
                <section className="row">
                    <img className="col-md-6"
                        src={`https://image.tmdb.org/t/p/w500${this.state.personaje.poster_path}`}/>
                    <section className="col-md-6 info">
                        <h3>Descripción</h3>
                        <p className="description">{this.state.personaje.overview}</p>
                        <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.personaje.release_date}</p>
                        <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.personaje.runtime} min</p>
                        <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.personaje.vote_average}</p>
                    </section>
                </section>
            </>
                )}
           </section> 
           </>
        )}
  }


export default Detallepelicula