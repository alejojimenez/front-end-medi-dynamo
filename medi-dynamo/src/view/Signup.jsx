import React from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../style/App.css';
import NavBar from "../component/NavBar";

const Signup = () => {
    return (
        <>
            <NavBar />
            <div className="style-img-home">
                <div className="login-center">
                    <Row>
                        <Col>
                            <Card border="primary" style={{ width: '24rem' }}>
                                <Card.Header className="text-center mb-2 color-text-general"><h3><strong>REGISTRO DE USUARIO</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <form>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">E-mail</span>
                                                </div>
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Ingrese correo electronico" aria-label="Email" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Password</span>
                                                </div>
                                                <input type="password" className="form-control" id="inputPassword" placeholder="Ingrese su password" aria-label="Password" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                                                </div>
                                                <input type="text" className="form-control" id="inputName" placeholder="Ingrese su nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Usuario</span>
                                                </div>
                                                <input type="text" class="form-control" id="inputUsername" placeholder="Ingrese su usuario" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                        </form>                                        
                                    </Card.Text>
                                    <Button variant="primary">Registrarse</Button>
                                </Card.Body>
                            </Card>                                   
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Signup;