import React, {Component} from "react";
class Crearcuenta extends Component{
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
            <h2 className="alert alert-primary">Registro</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form  className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <a href="login.html">Iniciar sesión</a></p>
                </div>
            </div>
           </section>
        )
    }
}

export default Crearcuenta