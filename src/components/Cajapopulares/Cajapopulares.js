import React, { Component } from "react"
import Ppopulares from "../Ppopulares/Ppopulares"

class Cajapopulares extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
        componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data=> this.setState(
                {datos:data.results}
            ))
            .catch(error => console.log(error))
    }

    render(){
        return(
            <>
            <h2 className="alert alert-primary">Peliculas Populares</h2>
           <section className="row cards" id="movies">
            {this.state.datos.length === 0 ?
            <h3>Cargando...</h3> :
            this.state.datos.filter((datos, idx) => idx < 4).map((datos) => (<Ppopulares key={datos.id} data={datos} />)) }
           </section>
           </>
        )
    }
}
export default Cajapopulares
