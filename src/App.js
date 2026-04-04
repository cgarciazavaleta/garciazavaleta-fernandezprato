import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import Peliculas from './screens/Peliculas/Peliculas'; 
import Movie from './components/Movie/Movie';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import crearcuenta from './screens/crearcuenta/crearcuenta';

function App() {
   let menu = [
    {Nombre:"Home", Path:"/"},
    {Nombre:"Películas", Path:"/peliculas"},
    {Nombre:"Log in", Path:"/login"},
    {Nombre:"Crear cuenta", Path:"/crearcuenta"},
  ]
  return (
   <>
   <Navbar menu={menu}/>
   <body>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/crearcuenta" component={crearcuenta} />

      </Switch>
   </body>
   <Footer />
   
   </>
  );
}

export default App;

