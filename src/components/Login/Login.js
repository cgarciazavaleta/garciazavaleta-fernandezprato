import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie";

const cookies = new Cookies()

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
        let storageUsuario = localStorage.getItem("usuarios")

        if (storageUsuario == null){
            alert("Los datos ingresados no son validos")
        }
        let usuarioParse = JSON.parse(storageUsuario)

        let usuarioFiltrado = usuarioParse.filter(user => user.email === this.state.email)
        // si no encuentra nada va a hacer un array vacio 
        // si encuentra algo devuleve el array con ese usuario

        if(usuarioFiltrado.length === 0){
        alert("El usuario ingresado no existe");
        } // si no encuentra nada en el filtrado quiere decir que el usuario no existe porq no esta en el local storage que es lo que se fija el filter

        let unUsuario = usuarioFiltrado[0]
        if(unUsuario.password !== this.state.password){
            alert("Los datos ingresados no son validos")
        }

        sessionStorage.setItem("usuarioEnSesion", JSON.stringify({sesionActiva: true}))
        cookies.set("auth-user", this.state.email)
        this.props.history.push("/")

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