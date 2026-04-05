import React, { Component } from "react"
import Cajapopulares from "../../components/Cajapopulares/Cajapopulares"
import Cajatoprated from "../../components/Cajatoprated/Cajatoprated"
import Buscador from "../../components/Buscador/Buscador"
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