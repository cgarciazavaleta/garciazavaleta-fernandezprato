import React, {Component} from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"

class Ptoprated extends Component{
    constructor(props){
        super(props)
        this.state =({
            datos : [],
            favoritos : false
        })
    }
    verMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos');
        if (storage){
        let favParseado = JSON.parse(storage);
        if (favParseado.includes(this.props.data.id)){
            this.setState({
                favoritos: true 
            })
        } }
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
        return(
           <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p className={this.state.verMas? "show":"hide"} >{this.props.data.overview}</p>
                     <button className="btn btn-primary" onClick={()=> this.verMas()}>{this.state.verMas? "Ver menos":"Ver mas"}</button> 
                    <Link to={`/detallepelicula/id/${this.props.data.id}`}>
                        <button className="btn btn-primary" >Ver detalle</button> 
                    </Link>
                    {this.state.favoritos?
                    <button className="btn alert-primary" onClick={() => this.sacarFavorito(this.props.data.id)}>
                        💔
                    </button>:
                    <button className="btn alert-primary" onClick={() => this.agregarFavorito(this.props.data.id)}>
                       ♥️
                    </button>}
                </div>
            </article>
        )
    }
}

export default Ptoprated