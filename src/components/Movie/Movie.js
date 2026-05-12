import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Movie(props){

    const [datos,setDatos] = useState([])
    const [favoritos,setFavoritos] = useState(false)
    const [verMas,setVerMas] = useState(false)


    function vermas(){
        setVerMas(!verMas)
    }

    useEffect(()=>{
        let storage = localStorage.getItem('favoritos');
        if (storage){
        let favParseado = JSON.parse(storage);
        if (favParseado.includes(props.data.id)){
            setFavoritos(true)
        } }
    })
 
    function agregarFavorito(id){
        let storage = localStorage.getItem('favoritos')
        let favParseado = JSON.parse(storage)
        let favoritos = []
        if (favParseado !== null){
            favParseado.push(id)
            let storageParseado = JSON.stringify(favParseado)
            localStorage.setItem('favoritos', storageParseado) 
        }
        else{
            let array = [id]
            let storageParseado = JSON.stringify(array)
            localStorage.setItem('favoritos', storageParseado)
        }
        setFavoritos(true)
    }

    function sacarFavorito(id){
        let storage = localStorage.getItem('favoritos')
        let favParseado = JSON.parse(storage)
        let favFiltrados = favParseado.filter(pelicula=>pelicula!=id)
        let storageParseado = JSON.stringify(favFiltrados)
        localStorage.setItem('favoritos', storageParseado)
        setFavoritos(false)
    }

        let usuarioLogueado = cookies.get("usuarioCookies");
        return(
           <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 class="card-title">{props.data.title}</h5>
                    <p className={verMas? "show":"hide"} >{props.data.overview}</p>
                     <button className="btn btn-primary" onClick={()=> vermas()}>{verMas? "Ver menos":"Ver mas"}</button> 
                    <Link to={`/detallepelicula/id/${props.data.id}`}>
                        <button className="btn btn-primary" >Ver detalle</button> 
                    </Link>
                    {usuarioLogueado?
                    <div>
                    {favoritos?
                    <button className="btn alert-primary" onClick={() => this.sacarFavorito(props.data.id)}>
                        💔
                    </button>:
                    <button className="btn alert-primary" onClick={() => this.agregarFavorito(props.data.id)}>
                       ♥️
                    </button>} 
                    </div>
                    :null}
                </div>
            </article>
        )
    }

export default Movie;