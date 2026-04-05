import React, {Component} from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"

class Ptoprated extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
    verMas(){
        this.setState({
            verMas: !this.state.verMas
        })
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
                    <a href="" className="btn alert-primary">♥️</a>
                </div>
            </article>
        )
    }
}

export default Ptoprated