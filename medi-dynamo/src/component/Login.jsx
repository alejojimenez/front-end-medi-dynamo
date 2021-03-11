import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../style/App.css';

const Login = () => {

    return (
            <div className="style-img-home">
                <div className="login-center">
                    <Row className = "justify-content-center">
                        <h1 className = " color-text-general">BIENVENIDO</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Card border="primary" style={{ width: '20rem' }}>
                                <Card.Header className="text-center mb-2 color-text-general"><h3><strong>Login</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Usuario</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Ingrese su usuario" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Password</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Ingrese su password" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>                                        
                                    </Card.Text>
                                    <Button variant="primary">Ingresar</Button>
                                </Card.Body>
                                <Card.Footer className="text-center p-3">
                                    <Card.Link href="#">Registrarse</Card.Link>
                                </Card.Footer>
                            </Card>                
                        </Col>
                    </Row>
                </div>
            </div>
    )
}

export default Login;
