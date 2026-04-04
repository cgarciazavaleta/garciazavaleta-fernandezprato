import React, { Component } from "react"
import Buscador from "../../components/buscador/Buscador"
import Cajapopulares from "../../components/Cajapopulares/Cajapopulares"
import Cajatoprated from "../../components/Cajatoprated/Cajatoprated"
import Movies from "../../components/Movies/Movies"
import Peliculas from "../../components/Movies/Movies"

function Home(){
    return(
            <>
            <Buscador/>
            <Cajapopulares/>
            <Cajatoprated/>
           </>
        )
}

export default Home