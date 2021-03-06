import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Button, Card, Row, Col } from 'react-bootstrap';
import NavBar from '../component/NavBar';
import PropTypes from "prop-types";
import '../style/App.css';

const Login = (props) => {

    const { store, actions } = useContext(Context);

    return(
        <>
            <NavBar />
            <div className="style-img-home">
                <div className="login-center">
                    <Row>
                        <Col>
                            <Card className="shadow p-3 mb-5 bg-card rounded" border="primary" style={{ width: '24rem' }}>
                                <Card.Header className="text-center mb-2 color-card-header"><h3><strong>INICIAR SESION</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <form onSubmit={(evento) => {actions.onSubmitSignin(evento); props.history.push("/home")}} >
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    autoFocus
                                                    type="text" 
                                                    className="shadow-sm p-3 form-control" 
                                                    placeholder="Ingrese su usuario" 
                                                    aria-label="Username" 
                                                    aria-describedby="basic-addon1" 
                                                    name="username"
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.username}
                                                    required
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    autoFocus
                                                    type="email" 
                                                    className="shadow-sm p-3 form-control" 
                                                    placeholder="ingrese su name@example.com" 
                                                    aria-label="Email" 
                                                    aria-describedby="basic-addon1" 
                                                    name="email"
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.email}
                                                    required
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    autoFocus
                                                    type="password" 
                                                    className="shadow-sm p-3 form-control" 
                                                    placeholder="Ingrese su password" 
                                                    aria-label="Password" 
                                                    aria-describedby="basic-addon1" 
                                                    name="password"
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.password}
                                                    required
                                                />
                                            </div>   
                                            {console.log("Data User", store.user_data)}
                                            <div>
                                                <Button className="shadow-sm" type="submit" variant="outline-light" block><i class="fa fa-share" aria-hidden="true"></i> Ingresar</Button>                                        
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
