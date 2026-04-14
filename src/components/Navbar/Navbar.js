import React from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom.min"
function Navbar(props) {

    let usuarioLogueado = false;
  
  return (
    <header>
      <div className="logo"><img src="./imagenes/Logo.png" alt="logo" /></div>
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