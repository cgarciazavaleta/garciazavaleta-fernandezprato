import React, {Component} from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"


class Ppopulares extends Component{
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
        let favParseado = JSON.parse(storage);
        if (favParseado !== null){
            this.state({
                favoritos: true 
            })
        }
     
        
    }
    agregarFavorito(id){
        let storage = localStorage.getItem('favoritos')
        let favParseado = JSON.parse(storage)
        favoritos = []
        if (favParseado !== null){
            favParseado.push(id)
            let storageParseado = JSON.stringify(favParseado)
            localStorage.setItem('favoritos', storageParseado)
        }
        else{
            let array = [id]
             let storageParseado = JSON.stringify(favParseado)
             localStorage.setItem('favoritos', storageParseado)
            this.state({
                favoritos: true 
            })

        }
    }
     render(){
        return(
           <article class="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <Link to={`/detallepelicula/id/${this.props.data.id}`}>
                        <button className="btn btn-primary" onClick={()=> this.verMas()}>{this.state.verMas? "Ver menos":"Ver mas"}</button> 
                    </Link>
                    <button className="btn alert-primary" onClick={() => this.manejarFavoritos(this.props.data.id)}>
                        {this.state.favorito ? "💔" : "♥️"}
                    </button>
                </div>
            </article>
        )
        console.log(this.props)
    }
}

export default Ppopulares
