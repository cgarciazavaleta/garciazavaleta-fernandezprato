import React, { Component } from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom.min"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Navbar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            usuarioLogueado: cookies.get("usuarioCookies")
        }
    }

    componentDidUpdate() {
        if (this.state.cookie !== cookies.get("usuarioCookies")) {
            this.setState({
                usuarioLogueado: cookies.get("usuarioCookies")
            });
        }
    }

    cerrarSesion() {
        cookies.remove("usuarioCookies");
        this.setState({
            usuarioLogueado: cookies.get("usuarioCookies")})
    }
    render(){
      let usuarioLogueado = cookies.get("usuarioCookies");
      return (
          <header>
            <div className="logo"><img src="./imagenes/Logo.png" alt="logo" /></div>
            <nav>
              <ul className="nav">
                {
                  this.props.menu.map((elementoMenu,idx)=>
                  <li key={elementoMenu + idx} className={elementoMenu.Nombre === "Log in"? (this.state.usuarioLogueado == null ? "show" : "hide"):
                    elementoMenu.Nombre === "Crear cuenta" ? (this.state.usuarioLogueado == null ? "show" : "hide"):
                    elementoMenu.Nombre === "Favoritos" ? (this.state.usuarioLogueado != null ? "show" : "hide"):
                    "show"}> 
                    <Link to={elementoMenu.Path}>{elementoMenu.Nombre}</Link> 
                  </li>)
                }
                {
                  this.state.usuarioLogueado != null ?
                    <li>
                      <button onClick={() => this.cerrarSesion()}>
                          Cerrar sesión
                      </button>
                    </li>
                    : null
                }
              </ul>
            </nav>
          </header>
      )
    }

}

export default Navbar;