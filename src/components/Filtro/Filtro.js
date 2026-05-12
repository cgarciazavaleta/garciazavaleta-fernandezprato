import React, {Component} from "react";
import { withRouter } from "react-router-dom";
class Filtro extends Component{
    constructor(props){
        super(props)
        this.state ={
            valor:"",
        }
    }
    controlarCambios(event){
        this.setState({valor:event.target.value},
()=> {this.props.metodoFiltrar(this.state.valor)}
        )
    }
    enviarForm(event){
        event.preventDefault();
    }
    
     render(){
        return(
           <section>
            <form  className="search-form" onSubmit={(event)=>this.enviarForm(event)}>
                <input type="text" className="" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
           </form>
           </section>
        )
    }
}

export default withRouter(Filtro);