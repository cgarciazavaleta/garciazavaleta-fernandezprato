import React, { Component } from "react"
import Cajapopulares from "../../components/Cajapopulares/Cajapopulares"
import Cajatoprated from "../../components/Cajatoprated/Cajatoprated"
import Buscador from "../../components/Buscador/Buscador"
import Movies from "../../components/Movies/Movies"
import Peliculas from "../../components/Movies/Movies"
import Navbar from "../../components/Navbar/Navbar"

function Home(){
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
            <Buscador/>
            <Cajapopulares/>
            <Cajatoprated/>
           </>
        )
}

export default Home