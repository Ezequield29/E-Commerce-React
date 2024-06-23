import React from 'react';
import CartWidget from './CartWidget';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/Styles.css';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <Link to='/'>
      <h3 className="navbar-brand text-white">COMPUTEK</h3>
      </Link>

      <div className="collapse navbar-collapse d-flex justify-content-center">
        <NavLink to='./category/Laptops' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Button variant="light">Laptops</Button>
        </NavLink>
        <NavLink to='./category/Monitores' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Button variant="light">Monitores</Button>
        </NavLink>
        <NavLink to='./category/Perifericos' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Button variant="light">Perifericos</Button>
        </NavLink>

      </div>
      <CartWidget /> 
    </nav>
  );
}

export default NavBar;