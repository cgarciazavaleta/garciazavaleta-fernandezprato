import React, { Component } from "react"
import Buscador from "../../components/Buscador/Buscador"
import Cajapopulares from "../../components/Cajapopulares/Cajapopulares"
import Cajatoprated from "../../components/Cajatoprated/Cajatoprated"

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