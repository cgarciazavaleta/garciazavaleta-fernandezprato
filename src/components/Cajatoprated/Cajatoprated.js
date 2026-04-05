import React, { Component } from "react"
import Ptoprated from "../Ptoprated/Ptoprated"

class Cajatoprated extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
        componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data=> this.setState(
                {datos:data.results}
            ))
            .catch(error => console.log(error))
    }

    render(){
        return(
            <>
            <h2 className="alert alert-primary">Peliculas Top Rated</h2>
           <section className="row cards" id="movies">
            {this.state.datos.length === 0?
            <h3>Cargando...</h3>:
            this.state.datos.map((datos,idx) => 
            <Ptoprated 
                key={datos.id} 
                data={datos}
            />)}
           </section>
           </>
        )
    }
}
export default Cajatoprated