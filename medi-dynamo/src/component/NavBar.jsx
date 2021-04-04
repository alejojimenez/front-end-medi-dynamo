import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/Logo.jpg";
import "../style/App.css";

const NavBar = () => {

    const { store, actions } = useContext(Context);
    console.log("Usuario Activo:", store.currentUser);
    // const dispatch = useDispatch()

    // const cerrarSesion = () => {
    //     // dispatch(cerrarSesionAccion())
    //     // props.history.push('/login')
    // };

    // const activo = useSelector(store => store.usuario.activo)
    // const activo = "True";

    return (
        <>
            <Navbar className="shadow fixed-top" expand="lg">
                <Navbar.Brand href="#home">
                    <Link to="/home">
                        <img src={Logo} height="42" alt="logo" />
                    </Link>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Nav className="mr-auto">
                    <NavLink
                        className="btn btn-light mr-sm-2"
                        size="sm"
                        to="/register"
                        exact
                        >
                            <i class="fa fa-user-plus" aria-hidden="true"></i> Registrarse
                    </NavLink>
                    <NavLink
                        className="btn btn-light mr-sm-2"
                        size="sm"
                        to="/login"
                        exact
                        >
                            <i class="fa fa-share" aria-hidden="true"></i> Iniciar Sesión
                    </NavLink>
                </Nav>
            </Navbar>
        </>

    // activo ? (
    //     <>
    //         <Navbar className="fixed-top" bg="light" expand="lg">
    //             <Navbar.Brand href="#home">
    //                 <Link to='/home'><img src={Logo} height="40" alt="logo" /></Link>
    //                 MediDynamo
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="m-auto">
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/patients'>Pacientes</Link>
    //                     </Nav.Link>
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/doctors'>Medicos</Link>
    //                     </Nav.Link>
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/forecasts'>Previsiones</Link>
    //                     </Nav.Link>
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/specialities'>Especialidades</Link>
    //                     </Nav.Link>
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/shifts'>Turnos</Link>
    //                     </Nav.Link>
    //                     <Nav.Link className="mr-5 h5">
    //                         <Link to='/campus'>Sedes</Link>
    //                     </Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //             <NavLink className="btn btn-outline-secondary mr-sm-2 " to="/home" exact>Inicio</NavLink>
    //             <button className="btn btn-outline-secondary mr-sm-2 " onClick={() => cerrarSesion()}>
    //                 Cerrar Sesión
    //             </button>
    //         </Navbar>
    //     </>
    // ) : (
    // )
  );
};

export default NavBar;
