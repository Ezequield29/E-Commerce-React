import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
    <nav className="NavBar navbar-expand-lg navbar-light bg-light">
      <Link to='/'>
      <h3 className="navbar-brand">Mi Tienda</h3>
      </Link>

      <div className="container-fluid categories">
        <NavLink to={'./category/Laptops'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Laptops</NavLink>
        <NavLink to={'./category/Monitores'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Monitores</NavLink>
        <NavLink to={'./category/Perifericos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perifericos</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

        </div>
        <CartWidget /> 
      </div>
    </nav>
  );
}

export default NavBar;
