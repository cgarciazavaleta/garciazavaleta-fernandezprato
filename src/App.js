import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Peliculas from './screens/Peliculas/Peliculas'; 
import Allseries from './screens/Allseries/Allseries'
import Registrarse from './screens/Registrarse/Registrarse';
import Iniciarse from './screens/Iniciarse/Iniciarse';
import Detallepelicula from './screens/Detallepelicula/Detallepelicula';
import Detalleserie from './screens/Detalleserie/Detalleserie'
import SearchResults from './screens/SearchResults/SearchResults';
import FavoritosPagina from './screens/FavoritosPagina/FavoritosPagina';

function App() {
   let menu = [
    {Nombre:"Home", Path:"/"},
    {Nombre:"Películas", Path:"/peliculas"},
    {Nombre:"Series", Path:"/series"},
    {Nombre:"Favoritos", Path:"/favoritospagina"},
    {Nombre:"Log in", Path:"/iniciarse"},
    {Nombre:"Crear cuenta", Path:"/registrarse"},
  ]
  return (
   <>
   <Navbar menu={menu}/>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Allseries} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/iniciarse" component={Iniciarse} />
        <Route path="/detallepelicula/id/:id" component={Detallepelicula} />
        <Route path="/detalleserie/id/:id" component={Detalleserie} />
        <Route path="/resultados/:busqueda" component={SearchResults} />
        <Route path="/favoritospagina" component={FavoritosPagina} />
      </Switch>
   <Footer />

   </>
  );
}

export default App;

