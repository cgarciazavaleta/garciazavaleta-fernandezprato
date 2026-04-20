import React, { Component } from "react"
import Toprated from "../../components/Toprated/Toprated"
import Buscador from "../../components/Buscador/Buscador"
import Navbar from "../../components/Navbar/Navbar"

function Rated() {
        let menu = [
                {Nombre:"Home", Path:"/"},
                {Nombre:"Películas Populares", Path:"/peliculas"},
                {Nombre:"Peliculas Top Rated", Path:"/rated"},
                {Nombre:"Favoritos", Path:"/favoritospagina"},
                {Nombre:"Log in", Path:"/iniciarse"},
                {Nombre:"Crear cuenta", Path:"/registrarse"},
        ]
    return(
            <>
              <Navbar menu={menu}/>
                        <Buscador />
                        <Toprated/>
                </>
        )
}

export default Rated