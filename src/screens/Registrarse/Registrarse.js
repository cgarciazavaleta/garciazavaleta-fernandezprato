import React, {Component} from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"
const cookies = new Cookies()

class Registrarse extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:"",
            password:"",
        }
    }
    evitarSubmit(event){
        event.preventDefault();
        
        let recuperoStorage = localStorage.getItem("usuarios");
        let usuariosGuardados = [];

        if (recuperoStorage !== null) {
            usuariosGuardados = JSON.parse(recuperoStorage);
        }

        let usuariosRepetido = usuariosGuardados.filter(usuario => usuario.email === this.state.email);

        if(this.state.email === "" || this.state.password === ""){
            alert("Por favor complete todos los campos.");
        }
        else if (usuariosRepetido.length > 0 ){
            alert("El email ya esta en uso");
        }
        else if (this.state.password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres");
        }
        else{
            let nuevoUsuario ={
                email:this.state.email,
                password: this.state.password
            };
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem("usuarios",JSON.stringify(usuariosGuardados));
      
        alert("Registro exitoso");

        this.setState({ 
            email: "", 
            password: "" });
        }

        this.props.history.push("/iniciarse");
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
        <>
        <h2 className="alert alert-primary">Registrarse</h2>
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
        </>
        )
    }
}

export default Registrarse