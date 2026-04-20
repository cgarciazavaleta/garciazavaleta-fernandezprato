import React, {Component} from "react";
import { withRouter } from "react-router-dom";
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state ={
            valor:"",
            tipo: "movie"
        }
    }
    controlarCambios(event){
        this.setState({valor:event.target.value})
    }
    enviarForm(event){
        event.preventDefault();
        this.props.history.push("/resultados/"+ this.state.tipo + "/" + this.state.valor)
    }
cambiarTipo(event){
    this.setState({tipo:event.target.value})
}
     render(){
        return(
           <section>
            <form  className="search-form" onSubmit={(event)=>this.enviarForm(event)}>
                <input type="text" className="" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                <select onChange={(event) => this.cambiarTipo(event)} value={this.state.tipo}>
                        <option value="movie">Películas</option>
                        <option value="tv">Series</option>
                </select>
           </form>
           </section>
        )
    }
}

export default withRouter(Buscador);