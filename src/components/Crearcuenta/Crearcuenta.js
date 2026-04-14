import React, {Component} from "react";
import { Link } from "react-router-dom";
class Crearcuenta extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:"",
            password:"",
        }
    }
    evitarSubmit(event){
        event.preventDefault();
       
        let usuario = {
            email: this.state.email,
            password: this.state.password
        };
        
        let usuarioAString = JSON.stringify(usuario);
        localStorage.setItem("usuario", usuarioAString);
        let usuarioRecuperado = JSON.parse(recuperoStorage);
        console.log(usuarioRecuperado);

    }
    controlarCambiosEmail(event){
        this.setState({
            email:event.target.value
        })
        event.preventDefault();
        let recuperoStorage = localStorage.getItem("usuario");
        let usuariosGuardados = []
        if (recuperoStorage !== null) {
            usuariosGuardados = JSON.parse(recuperoStorage);
        }
        let usuariosConEseEmail = usuariosGuardados.filter(usuario => usuario.email === this.state.email);
     
    }
    controlarCambiosPassword(event){
        this.setState({
            password:event.target.value
        })
    }
     render(){

        return(
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(event)=>this.evitarSubmit(event)}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" onChange={(event)=>this.controlarCambiosEmail(event)} value={this.state.email}/>
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event)=>this.controlarCambiosPassword(event)} value={this.state.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/iniciarse">Iniciar sesion</Link> </p>
                </div>
            </div>
        )
    }
}

export default Crearcuenta