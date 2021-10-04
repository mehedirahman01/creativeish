import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to="/home"><img src={logo} alt="" width="100%" height="40" /></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;