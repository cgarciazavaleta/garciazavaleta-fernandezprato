import {useState, useEffect} from "react"
import Movie from "../Movie/Movie";

function Movies(props){
    const [datos,setDatos] = useState([])
    const [datosFiltrados,setDatosFiltrados] = useState([])
    const [valor,setValor] = useState("")
    const [cantidad,setCantidad] = useState(8)

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f1682dada002836e815351506ac3816")
            .then(response => response.json())
            .then(data => {setDatos(data.results)
                   setDatosFiltrados(data.results)})
            .catch(error => console.log(error))
    })

    function cargarMas() {
        setCantidad(cantidad + 8);
    }

    function controlarCambios(event) {
        setValor(event.target.value,
            () => { filtrarPeliculas(valor) }
        )
    }

    function filtrarPeliculas(filtrada) {
        console.log(datos)
        setDatosFiltrados(datos.filter((pelicula) => pelicula.original_title.toLowerCase().includes(filtrada.toLowerCase())))
    }
    function enviarForm(event){
        event.preventDefault();
    }

        return (

            <>
                <h2 className="alert alert-primary">Películas Populares</h2>
                <form className="search-form" onSubmit={(event) => enviarForm(event)}>
                    <input type="text" className="" onChange={(event) => controlarCambios(event)} value={valor} />
                </form>
                <section className="row cards" id="movies">
                    {
                        datos.length === 0 ?
                            <h3>Cargando...</h3> :
                        datosFiltrados.filter((datos, idx) => idx < cantidad).map((pelicula) => (<Movie key={pelicula.id} data={pelicula} />))                    }
                </section>
                <button className="btn-ver-todas" onClick={() => cargarMas()}>Cargar más</button>
            </>
        )
}

export default Movies;