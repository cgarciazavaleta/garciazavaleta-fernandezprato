import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Login extends Component{
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
            password: this.state.contraseña
        };
        let usuarioAString = JSON.stringify(usuario);
        localStorage.setItem("usuario", usuarioAString);
        let recuperoStorage = localStorage.getItem("usuario");
        let usuarioRecuperado = JSON.parse(recuperoStorage);
        console.log(usuarioRecuperado);

    }
    controlarCambiosEmail(event){
        this.setState({
            email:event.target.value
        })
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
                        <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                    </form>
                    <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/registrarse"> Registrarse </Link> </p>
                </div>
            </div>
        )
    }
}

export default Login