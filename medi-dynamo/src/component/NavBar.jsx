import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/Logo.jpg";
//import '../img/Logo.jpg';

const NavBar = () => {
    // const dispatch = useDispatch()

    const cerrarSesion = () => {
        // dispatch(cerrarSesionAccion())
        // props.history.push('/login')
    }

    // const activo = useSelector(store => store.usuario.activo)

    const activo = "true"

    return (

        activo ? (
            <>
                <Navbar className="fixed-top" bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <Link to='/home'><img src={Logo} height="40" alt="logo" /></Link>
                        MediDynamo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="mr-5 h5">
                                <Link to='/patients'>Pacientes</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/doctors'>Medicos</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/forecasts'>Previsiones</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/specialities'>Especialidades</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/shifts'>Turnos</Link>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5">
                                <Link to='/campus'>Sedes</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink className="btn btn-outline-secondary mr-2 " to="/home" exact>Inicio</NavLink>
                    <button className="btn btn-outline-secondary mr-2 " onClick={() => cerrarSesion()}>
                        Cerrar Sesión
                    </button>
                </Navbar>
            </>
        ) : (
            <>
                <Navbar className="fixed-top" expand="lg">
                    <Navbar.Brand href="#home">
                        <Link to='/home'><img src={Logo} height="40" alt="logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavLink className="btn btn-outline-secondary mr-2 btn-md" to="/login" exact>Login</NavLink>
                </Navbar>
            </>
        )
    )
}

export default NavBar;