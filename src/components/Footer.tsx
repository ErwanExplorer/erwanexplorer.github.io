import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img className='img-logo' src={logo} alt="" />
                <h3>Copyright 2023 - Erwan</h3>
            </div>

            <div className='nav-wrapper'>
                <ul>
                    <NavLink to='/' className='nav-item'>Accueil</NavLink>
                    <NavLink to='/about' className='nav-item'>A Propos</NavLink>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;