import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const LoginForm = ({ Login, error }) => {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = evento => {
        evento.preventDefault();
        Login(details);
    }

    return(
        <div className="style-img-home">
            <div className="login-center">
                <Row>
                    <Col>
                        <Card className="bg-card" border="primary" style={{ width: '24rem' }}>
                            <Card.Header className="text-center mb-2 color-card-header"><h3><strong>INICIAR SESION</strong></h3></Card.Header>
                            {(error !== "") ? (<div className="error-login"><strog>{error}</strog></div>) : ""}
                            <Card.Body className="text-center p-3">
                                <Card.Text>
                                    <form onSubmit={submitHandler}>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Usuario</span>
                                            </div>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Ingrese su usuario" 
                                                aria-label="Name" 
                                                aria-describedby="basic-addon1" 
                                                name="name"
                                                onChange= {evento => setDetails({...details, name: evento.target.value})} value={details.name}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Email</span>
                                            </div>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="ingrese su name@example.com" 
                                                aria-label="Email" 
                                                aria-describedby="basic-addon1" 
                                                name="email"
                                                onChange= {evento => setDetails({...details, email: evento.target.value})} value={details.email}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Password</span>
                                            </div>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Ingrese su password" 
                                                aria-label="Password" 
                                                aria-describedby="basic-addon1" 
                                                name="password"
                                                onChange= {evento => setDetails({...details, password: evento.target.value})} value={details.password}
                                            />
                                        </div>   
                                        <div>
                                            <Button variant="outline-light" type="submit" block>Ingresar</Button>                                        
                                        </div>                                     
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card>                
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default LoginForm;