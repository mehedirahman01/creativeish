import React from 'react';
import { NavLink } from 'react-router-dom';

// Footer
const Footer = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <footer className="py-3 bg-dark">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <NavLink className="nav-link text-white" to="/home">Home</NavLink>
                        <NavLink className="nav-link text-white" to="/courses">Courses</NavLink>
                        <NavLink className="nav-link text-white" to="/about">About</NavLink>
                        <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                    </ul>
                    <p className="text-center text-white m-0">&copy; 2021 Creativeish, Inc</p>
                </footer>
            </div>
        </div >
    );
};

export default Footer;