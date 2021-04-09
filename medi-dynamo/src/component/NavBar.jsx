import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Logo from "../img/Logo.jpg";
import "../style/App.css";

const NavBar = (props) => {

    const { store, actions } = useContext(Context);
    console.log("Usuario Activo:", store.currentUser);

    const cerrarSesion = (props) => {
        props.history.push("/login")
    };

    return (
        (store.currentUser !== " ") ? (
            <>
                <Navbar className="shadow fixed-top bg-footer" bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <Link to='/home'><img src={Logo} height="40" alt="logo" /></Link>
                        MediDynamo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="mr-5 h5">
                                <Link to='/patients'><i class="fa fa-users" aria-hidden="true"></i> Pacientes</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/doctors'><i class="fa fa-user-md" aria-hidden="true"></i> Médicos</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/forecasts'><i className="fas fa-medkit text-muted mr-3" /> Previsiones</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/specialities'><i class="fa fa-stethoscope" aria-hidden="true"></i> Especialidades</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/shifts'><i class="fa fa-clock-o" aria-hidden="true"></i> Turnos</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/campus'><i class="fa fa-hospital-o" aria-hidden="true"></i> Sedes</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <h5 className="color-text">¡Hola, Bienvenido {store.currentUser}!</h5>
                    <button className="btn btn-light mr-sm-2 rounded-pill" onClick={() => cerrarSesion()}>
                        <i class="fa fa-reply" aria-hidden="true"></i> Cerrar Sesión
                    </button>
                </Navbar>
            </>
        ) : (
            <>
                <Navbar className="shadow fixed-top bg-footer" expand="lg">
                    <Navbar.Brand href="#home">
                        <Link to="/home">
                            <img src={Logo} height="42" alt="logo" />
                            MediDynamo
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="form-inline ml-auto">
                            <NavLink
                                className="btn btn-light mr-sm-2 rounded-pill"
                                size="sm"
                                to="/register"
                                exact
                                >
                                    <i class="fa fa-user-plus" aria-hidden="true"></i> Registrarse
                            </NavLink>
                            <NavLink
                                className="btn btn-light mr-sm-2 rounded-pill"
                                size="sm"
                                to="/login"
                                exact
                                >
                                    <i class="fa fa-share" aria-hidden="true"></i> Iniciar Sesión
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>    
        )
    );
};

NavBar.propTypes = {
    match: PropTypes.object,
	history: PropTypes.object
};

export default NavBar;
