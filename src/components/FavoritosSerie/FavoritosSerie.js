import React, { Component } from "react";
import Serie from "../Serie/Serie";

class FavoritosSeries extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
        let storageParseado = JSON.parse(storage)
        console.log(storageParseado)
        let arrayFavoritos= []
        storageParseado.map(id=>
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3f1682dada002836e815351506ac3816`)
            .then(response => response.json())
            .then(data => 
                {
                    arrayFavoritos.push(data)
                    this.setState(
                { datos: arrayFavoritos },
                console.log(this.state.datos)
            )})
            .catch(error => console.log(error))
        )
    }

    render(){
        return(
            <>
                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((pelicula,idx)=> <Serie key={pelicula.id} data={pelicula}/>)
                    
                        
                    }
                </section>
            </>
        )
    }
}

export default FavoritosSeries