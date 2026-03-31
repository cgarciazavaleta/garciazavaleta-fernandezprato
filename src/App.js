import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home/Home';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
   let menu = [
    {Nombre:"Home", Path:"/"},
    {Nombre:"Log in", Path:"/login"},
    {Nombre:"Crear cuenta", Path:"/crearcuenta"},
  ]
  return (
   <>
   <Navbar />
   <body>
    <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
   </body>
   <Footer />
   
   </>
  );
}

export default App;

