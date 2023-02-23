import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/images/logo.png';
import Footer from '../components/Footer';

const about = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Qui je suis ?</h1>
                <p>
                    Je m'appelle Erwan, j'ai 18 ans et je suis développeur web (html,css,js,react) et typescript
                </p>
                <p>
                    Je suis aussi un grand fan de jeux vidéos, de musique et de cinéma.
                </p>
                <img className='logo-img' src={logo} alt="" />
            </div>
            <Footer />
        </>
    );
};

export default about;