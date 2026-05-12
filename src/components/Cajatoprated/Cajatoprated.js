import Ptoprated from "../Ptoprated/Ptoprated"
import { Link } from "react-router-dom"

import { useState, useEffect } from "react"

function Cajatoprated(props){
    const [datos,setDatos] = useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data=> setDatos(data.results))
            .catch(error => console.log(error))
    }, [] )

     return(
            <>
            <h2 className="alert alert-primary">Peliculas Top Rated</h2>
           <section className="row cards" id="movies">

            {datos.length === 0 ?
            <h3>Cargando...</h3> :
            datos.filter((datos, idx) => idx < 4).map((datos) => (<Ptoprated key={datos.id} data={datos} />)) }
            <Link to={"/rated"}>
                        <button className="btn btn-primary">Ver todas</button> 
            </Link>
           </section>
           </>
        )
}

export default Cajatoprated