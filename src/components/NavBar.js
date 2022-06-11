import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/Logo.png";

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark royal-nav">
            <div className="container-fluid">
                <img src={require("../img/Logo.png")} alt="Imagen de logo" width="5%" /> &nbsp;
                <Link className="navbar-brand" to="/">Gym-App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse right-nav" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/" >Inicio</NavLink>
                        <NavLink className="nav-link" to="/about" >Blog</NavLink>
                        <NavLink className="nav-link" to="/about" >Contacto</NavLink>
                        <NavLink className="nav-link" to="/login">Reserva</NavLink>

                    </div>
                </div>
                &nbsp;
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}
