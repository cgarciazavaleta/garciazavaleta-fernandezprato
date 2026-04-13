import React, { Component } from "react"
import Movies from "../../components/Movies/Movies"
import Buscador from "../../components/Buscador/Buscador"

function Peliculas(){
    return(
            <>
            <Buscador/>
            <Movies/>
           </>
        )
}

export default Peliculas