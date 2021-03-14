import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../style/App.css';
import NavBar from '../component/NavBar';

const Login = () => {

    return (
        <>
            <NavBar />
            <div className="style-img-home">
                <div className="login-center">
                    <Row>
                        <Col>
                            <Card border="primary" style={{ width: '24rem' }}>
                                <Card.Header className="text-center mb-2 color-text-general"><h3><strong>INICIAR SESION</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Usuario</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Ingrese su usuario" aria-label="User" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Password</span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Ingrese su password" aria-label="Password" aria-describedby="basic-addon1" />
                                        </div>                                        
                                    </Card.Text>
                                    <Button variant="primary">Ingresar</Button>
                                </Card.Body>
                            </Card>                
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Login;
