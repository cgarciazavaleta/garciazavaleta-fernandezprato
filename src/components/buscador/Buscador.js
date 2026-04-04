import React, {Component} from "react";
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state ={
            valor:"",
        }
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event){
        this.setState({valor:event.target.value})
    }
     render(){
        return(
           <section>
            <form  className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type="text" className="" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
           </form>
           </section>
        )
    }
}

export default Buscador