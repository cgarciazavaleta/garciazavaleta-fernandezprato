import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Peliculas from './screens/Peliculas/Peliculas'; 
import Rated from './screens/Rated/Rated';
import Registrarse from './screens/Registrarse/Registrarse';
import Iniciarse from './screens/Iniciarse/Iniciarse';
import Detallepelicula from './screens/Detallepelicula/Detallepelicula';
import Detalleserie from './screens/Detalleserie/Detalleserie'
import SearchResults from './screens/SearchResults/SearchResults';
import FavoritosPagina from './screens/FavoritosPagina/FavoritosPagina';
import PaginaNoEnontrada from './screens/PaginaNoEncontrada/PaginaNoEncontrada';

function App() {
  
  return (
   <>

    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/rated" component={Rated} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/iniciarse" component={Iniciarse} />
        <Route path="/detallepelicula/id/:id" component={Detallepelicula} />
        <Route path="/detalleserie/id/:id" component={Detalleserie} />
        <Route path="/resultados/:tipo/:busqueda" component={SearchResults} />
        <Route path="/favoritospagina" component={FavoritosPagina} />
        <Route path="/*" component={PaginaNoEnontrada} />
      </Switch>
   <Footer />

   </>
  );
}

export default App;

