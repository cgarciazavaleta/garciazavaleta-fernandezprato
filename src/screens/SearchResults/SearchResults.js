import { Component } from "react";
import Ppopulares from "../../components/Ppopulares/Ppopulares";

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            datos: []
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3f1682dada002836e815351506ac3816&query=${this.props.match.params.busqueda}`)
            .then(response => response.json())
            .then(data=> this.setState(
                {datos:data.results}
            ))
            .catch(error => console.log(error))
    }
    render(){
        return(
            <section className="row cards" id="movies">
            {this.state.datos.length === 0?
            <h3>Cargando...</h3>:
            this.state.datos.map((datos,idx) => <Ppopulares key={datos.id} data={datos}/>)}
           </section>
        )
    }
}

export default SearchResults