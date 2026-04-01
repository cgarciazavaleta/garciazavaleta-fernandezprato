import React from 'react';
function Navbar() {

    let usuarioLogueado = false;
  
  return (
    <header>
     <a href='index.html'>
      <div className="logo"><img src="./imagenes/Logo.png" alt="logo" /></div>
      </a> 
      <nav>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/peliculas">Películas</a></li>
          {usuarioLogueado ? (<li><a href="/peliculas">Películas</a></li>)(<li><a href="/">Favoritos</a></li>) : (<><li><a href="/">Login</a></li><li><a href="/">Crear Cuenta</a></li></>)}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;