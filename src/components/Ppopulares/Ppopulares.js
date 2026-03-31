import React, {Component} from "react";
class Ppopulares extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
     render(){
        return(
           <section>
            <img src={this.props.backdrop_path} alt="" />
            <h2> {this.props.title} </h2> 
            <p> {this.props.overview} </p> 
            <Link to={``}>
                <button className="more" onClick={()=> this.verMas()}>{this.state.verMas? "Ver menos":"Ver mas"}</button> 
            </Link>
            <section className="extra">
                <p className={this.state.verMas? "mostrar":"ocultar"}>{this.props.originName} </p> 
            </section>
		<button className="delete" onClick={()=>this.props.borrar(this.props.id)}>Borrar</button> 
           </section>
        )
    }
}

export default Ppopulares