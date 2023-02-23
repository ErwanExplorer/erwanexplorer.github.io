import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>PortFolio Erwan</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
            </div>
            <Footer />
        </>
    );
};

export default home;