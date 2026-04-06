import React, {Component} from 'react'

class Detalleserie extends Component{
    constructor(props){
        super(props);
        this.state = {
            serie: {}
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data=> this.setState({
                serie: data
            }))
            .catch(error => console.log(error))
    }
    render(){
        return(
            <>
           <section>
            {!this.state.serie.name?
            (<h3>Cargando...</h3>): (
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
                    </section>
                </section>
            </>
                )}
           </section> 
           </>
        )}
  }


export default Detalleserie