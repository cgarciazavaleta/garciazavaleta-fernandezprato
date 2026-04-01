import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import Peliculas from './screens/Peliculas/Peliculas'; 
import Movie from './components/Movie/Movie';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
   let menu = [
    {Nombre:"Home", Path:"/"},
    {Nombre:"Películas", Path:"/peliculas"},
    {Nombre:"Log in", Path:"/login"},
    {Nombre:"Crear cuenta", Path:"/crearcuenta"},
  ]
  return (
   <>
   <Navbar />
   <body>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
   </body>
   <Footer />
   
   </>
  );
}

export default App;

