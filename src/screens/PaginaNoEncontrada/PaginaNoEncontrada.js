import React from 'react'
import Navbar from '../../components/Navbar/Navbar';

function PaginaNoEnontrada(){
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
        <div>Pagina no encontrada</div>
        </>
    )
}

export default PaginaNoEnontrada