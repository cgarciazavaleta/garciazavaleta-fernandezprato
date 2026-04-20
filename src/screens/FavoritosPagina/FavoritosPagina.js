import React, { Component } from "react"
import Favoritos from "../../components/Favoritos/Favoritos"
import FavoritosSeries from "../../components/FavoritosSerie/FavoritosSerie"
import Navbar from "../../components/Navbar/Navbar"

function FavoritosPagina(){
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
            <Favoritos/>
            <FavoritosSeries/>
           </>
        )
}

export default FavoritosPagina