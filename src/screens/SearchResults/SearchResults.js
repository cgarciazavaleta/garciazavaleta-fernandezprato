import { Component } from "react";
import Ppopulares from "../../components/Ppopulares/Ppopulares";
import Serie from "../../components/Serie/Serie";
import Navbar from "../../components/Navbar/Navbar";

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            datos: [],
            series: []
        }
    
    }
    
    componentDidMount(){
        let tipo = this.props.match.params.tipo;
        
        if (tipo == "movie"){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3f1682dada002836e815351506ac3816&query=${this.props.match.params.busqueda}`)
            .then(response => response.json())
            .then(data=> this.setState(
                {datos:data.results}
            ))
            .catch(error => console.log(error))
        }
        else{
            console.log(tipo)
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=3f1682dada002836e815351506ac3816&query=${this.props.match.params.busqueda}`)
            .then(response => response.json())
            .then(data=> this.setState(
                {series:data.results}
            ))
            .catch(error => console.log(error))
    }}
    
    render(){
        let tipo = this.props.match.params.tipo;
         let menu = [
                { Nombre: "Home", Path: "/" },
                { Nombre: "Películas Populares", Path: "/peliculas" },
                { Nombre: "Peliculas Top Rated", Path: "/rated" },
                { Nombre: "Favoritos", Path: "/favoritospagina" },
                { Nombre: "Log in", Path: "/iniciarse" },
                { Nombre: "Crear cuenta", Path: "/registrarse" },
        ]
        return(
            <>
            <Navbar menu = {menu}/>
            <h2 className="alert alert-primary">Resultados de Busqueda</h2>
            {tipo === "movie" ? (
                <section className="row cards" id="movies">
                    {this.state.datos.length === 0?
                    <h3>Cargando...</h3>:
                    this.state.datos.map((datos,idx) => <Ppopulares key={datos.id} data={datos}/>)}
                </section> )
                : null}

        {tipo === "tv" ? (
                <section className="row cards" id="series">
                    {this.state.series.length === 0?
                    <h3>Cargando...</h3>:
                    this.state.series.map((serie,idx) => <Serie key={serie.id} data={serie}/>)}
                </section>)
                :null}
            </>
        )
    }
}

export default SearchResults