import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img className='img-logo' src={logo} alt="" />
                <h1>Erwan</h1>
            </div>
            <div className='nav-wrapper'>
                <ul>
                    <NavLink to='/' className='nav-item'>Accueil</NavLink>
                    <NavLink to='/about' className='nav-item'>A Propos</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;