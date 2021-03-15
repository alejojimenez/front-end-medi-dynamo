import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Button, Card, Row, Col } from 'react-bootstrap';
import '../style/App.css';
import NavBar from '../component/NavBar';
import PropTypes from "prop-types";

const Login = (props) => {

    const { store, actions } = useContext(Context);

    return(
        <>
            <NavBar />
            <div className="style-img-home">
                <div className="login-center">
                    <Row>
                        <Col>
                            <Card className="bg-card" border="primary" style={{ width: '24rem' }}>
                                <Card.Header className="text-center mb-2 color-card-header"><h3><strong>INICIAR SESION</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <form onSubmit={(evento) => {actions.onSubmitSignin(evento); props.history.push("/home")}} >
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Usuario</span>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Ingrese su usuario" 
                                                    aria-label="Username" 
                                                    aria-describedby="basic-addon1" 
                                                    name="username"
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    // onChange= {evento => setDetails({...details, username: evento.target.value})} 
                                                    value={store.user_data.username}
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
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    // onChange= {evento => setDetails({...details, email: evento.target.value})} 
                                                    value={store.user_data.email}
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
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    // onChange= {evento => setDetails({...details, password: evento.target.value})} 
                                                    value={store.user_data.password}
                                                />
                                            </div>   
                                            {console.log("Data User", store.user_data)}
                                            <div>
                                                <Button type="submit" variant="outline-light" block>Ingresar</Button>                                        
                                            </div>                                     
                                        </form>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>                
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

Login.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};

export default Login;
