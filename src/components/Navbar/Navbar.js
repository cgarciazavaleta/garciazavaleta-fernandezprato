import React from 'react';
function Navbar() {

    let usuarioLogueado = false;
  
  return (
    <header>
      <div className="logo"><img src="./imagenes/Logo.png" alt="logo" /></div>
      <nav>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          {usuarioLogueado ? (<li><a href="/">Favoritos</a></li>) : (<><li><a href="/">Login</a></li><li><a href="/">Crear Cuenta</a></li></>)}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;