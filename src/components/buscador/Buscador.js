import React, {Component} from "react";
import { withRouter } from "react-router-dom";
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state ={
            valor:"",
        }
    }
    controlarCambios(event){
        this.setState({valor:event.target.value})
    }
    enviarForm(event){
        event.preventDefault();
        this.props.history.push("/resultados/"+this.state.valor)
    }
     render(){
        return(
           <section>
            <form  className="search-form" onSubmit={(event)=>this.enviarForm(event)}>
                <input type="text" className="" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
           </form>
           </section>
        )
    }
}

export default withRouter(Buscador);