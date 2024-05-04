import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/Styles.css';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/'>
      <h3 className="navbar-brand">Mi Tienda</h3>
      </Link>

      <div className="collapse navbar-collapse d-flex justify-content-center">
        <NavLink to={'./category/Laptops'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Laptops</NavLink>
        <NavLink to={'./category/Monitores'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Monitores</NavLink>
        <NavLink to={'./category/Perifericos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perifericos</NavLink>
      </div>
      <CartWidget /> 
    </nav>
  );
}

export default NavBar;
