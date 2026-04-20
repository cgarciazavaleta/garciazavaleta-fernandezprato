import React, {Component} from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Detallepelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            personaje: {},
            favoritos : false
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data=> {
                this.setState({
                    personaje: data
                },
                    () => {
                        let storage = localStorage.getItem('favoritos');
                        if (storage) {
                            console.log("llego")
                            let favParseado = JSON.parse(storage);
                            if (favParseado.includes(this.state.personaje.id)) {
                                this.setState({
                                    favoritos: true
                                })
                            }
                        }
                    }
                )
            })
            .catch(error => console.log(error))
    }

    agregarFavorito(id){
        let storage = localStorage.getItem('favoritos')
        let favParseado = JSON.parse(storage)
        let favoritos = []
        if (favParseado !== null){
            favParseado.push(id)
            let storageParseado = JSON.stringify(favParseado)
            localStorage.setItem('favoritos', storageParseado)
            
        }
        else{
            let array = [id]
            let storageParseado = JSON.stringify(array)
            localStorage.setItem('favoritos', storageParseado)
        }
        this.setState({
                favoritos: true 
            })
    }
    sacarFavorito(id){
        let storage = localStorage.getItem('favoritos')
        let favParseado = JSON.parse(storage)
        let favFiltrados = favParseado.filter(pelicula=>pelicula!=id)
        let storageParseado = JSON.stringify(favFiltrados)
        localStorage.setItem('favoritos', storageParseado)
         this.setState({
                favoritos: false 
            })
    }

    render(){
        let usuarioLogueado = cookies.get("usuarioCookies");
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
                        {usuarioLogueado?
                        <div>
                        {this.state.favoritos?
                        <button className="btn alert-primary" onClick={() => this.sacarFavorito(this.state.personaje.id)}>
                            💔
                        </button>:
                        <button className="btn alert-primary" onClick={() => this.agregarFavorito(this.state.personaje.id)}>
                            ♥️
                        </button>} 
                        </div>
                        :null}
                    </section>
                </section>
            </>
                )}
           </section> 
           </>
        )}
  }


export default Detallepelicula