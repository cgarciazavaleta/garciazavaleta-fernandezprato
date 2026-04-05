import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import Peliculas from './screens/Peliculas/Peliculas'; 
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Registrarse from './screens/Registrarse/Registrarse';
import Iniciarse from './screens/Iniciarse/Iniciarse';
import Detallepelicula from './screens/Detallepelicula/Detallepelicula';

function App() {
   let menu = [
    {Nombre:"Home", Path:"/"},
    {Nombre:"Películas", Path:"/peliculas"},
    {Nombre:"Series", Path:"/series"},
    {Nombre:"Favoritas", Path:"/favoritas"},
    {Nombre:"Log in", Path:"/iniciarse"},
    {Nombre:"Crear cuenta", Path:"/registrarse"},
  ]
  return (
   <>
   <Navbar menu={menu}/>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/iniciarse" component={Iniciarse} />
        <Route path="/detallepelicula/id/:id" component={Detallepelicula} />
      </Switch>
   <Footer />
   
   </>
  );
}

export default App;

