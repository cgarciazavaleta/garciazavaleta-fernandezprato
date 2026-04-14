import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Serie extends Component {
    constructor(props){
        super(props)
        this.state =({
            datos : [],
            favoritosSerie : false
        })
    }
    verMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritosSerie');
        if (storage){
        let favParseado = JSON.parse(storage);
        if (favParseado.includes(this.props.data.id)){
            this.setState({
                favoritosSerie: true 
            })
        } }
    }
    agregarFavoritoSerie(id){
        let storage = localStorage.getItem('favoritosSerie')
        let favParseado = JSON.parse(storage)
        let favoritosSerie = []
        if (favParseado !== null){
            favParseado.push(id)
            let storageParseado = JSON.stringify(favParseado)
            localStorage.setItem('favoritosSerie', storageParseado)
            
        }
        else{
            let array = [id]
            let storageParseado = JSON.stringify(array)
            localStorage.setItem('favoritosSerie', storageParseado)
        }
        this.setState({
                favoritosSerie: true 
            })
    }
    sacarFavoritoSerie(id){
        let storage = localStorage.getItem('favoritosSerie')
        let favParseado = JSON.parse(storage)
        let favFiltrados = favParseado.filter(pelicula=>pelicula!=id)
        let storageParseado = JSON.stringify(favFiltrados)
        localStorage.setItem('favoritosSerie', storageParseado)
         this.setState({
                favoritosSerie: false 
            })
    }


     render(){
        return(
           <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 class="card-title">{this.props.data.name}</h5>
                    <p className={this.state.verMas? "show":"hide"} >{this.props.data.overview}</p>
                     <button className="btn btn-primary" onClick={()=> this.verMas()}>{this.state.verMas? "Ver menos":"Ver mas"}</button> 
                    <Link to={`/detalleserie/id/${this.props.data.id}`}>
                        <button className="btn btn-primary" >Ver detalle</button> 
                    </Link>
                    {this.state.favoritosSerie?
                    <button className="btn alert-primary" onClick={() => this.sacarFavoritoSerie(this.props.data.id)}>
                        💔
                    </button>:
                    <button className="btn alert-primary" onClick={() => this.agregarFavoritoSerie(this.props.data.id)}>
                       ♥️
                    </button>}
                </div>
            </article>
        )
    }
}
export default Serie;