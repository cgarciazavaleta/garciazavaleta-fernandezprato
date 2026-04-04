import React from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom.min"
function Navbar(props) {

    let usuarioLogueado = false;
  
  return (
    <header>
     <a href='index.html'>
      <div className="logo"><img src="./imagenes/Logo.png" alt="logo" /></div>
      </a> 
      <nav>
        <ul className="nav">
           {
                props.menu.map((elementoMenu,idx)=><li key={elementoMenu + idx}> <Link to={elementoMenu.Path}>{elementoMenu.Nombre}</Link> </li>)
            }
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;