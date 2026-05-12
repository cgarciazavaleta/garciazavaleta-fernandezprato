import React, { Component } from "react"
import Movies from "../../components/Movies/Movies"
import Navbar from "../../components/Navbar/Navbar"

function Peliculas(){
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
            <Movies/>
           </>
        )
}

export default Peliculas