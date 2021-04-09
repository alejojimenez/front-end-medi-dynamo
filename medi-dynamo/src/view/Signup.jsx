import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../style/App.css';
import NavBar from "../component/NavBar";
import PropTypes from "prop-types";

const Signup = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <NavBar />
            <div className="style-img-home">
                <div className="login-center">
                    <Row>
                        <Col>
                            <Card className="shadow p-3 mb-5 bg-card rounded" border="primary" style={{ width: '24rem' }}>
                                <Card.Header className="text-center mb-2 color-card-header"><h3><strong>REGISTRO DE USUARIO</strong></h3></Card.Header>
                                <Card.Body className="text-center p-3">
                                    <Card.Text>
                                        <form onSubmit={(evento) => {actions.onSubmitSignup(evento); props.history.push("/login")}}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    type="email" 
                                                    className="shadow-sm p-3 form-control" 
                                                    id="inputEmail" 
                                                    placeholder="Ingrese su name@example.com" 
                                                    aria-label="Email" 
                                                    aria-describedby="basic-addon1" 
                                                    name="email" 
                                                    onChange={(evento)=> actions.onChangeUser(evento)} 
                                                    value={store.user_data.email}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    type="password" 
                                                    className="shadow-sm p-3 form-control" 
                                                    id="inputPassword" 
                                                    placeholder="Ingrese su password" 
                                                    aria-label="Password" 
                                                    aria-describedby="basic-addon1" 
                                                    name="password" 
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.password}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    className="shadow-sm p-3 form-control" 
                                                    id="inputName" 
                                                    placeholder="Ingrese su nombre" 
                                                    aria-label="Name" 
                                                    aria-describedby="basic-addon1" 
                                                    name="name" 
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.name}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    className="shadow-sm p-3 form-control" 
                                                    id="inputUsername" 
                                                    placeholder="Ingrese su usuario" 
                                                    aria-label="Username" 
                                                    aria-describedby="basic-addon1" 
                                                    name="username" 
                                                    onChange={(evento)=> actions.onChangeUser(evento)}
                                                    value={store.user_data.username}
                                                />
                                            </div>
                                            <div>
                                                <Button className="shadow-sm" type="submit" variant="outline-light" block><i class="fa fa-user-plus" aria-hidden="true"></i> Registrarse</Button>
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

Signup.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};

export default Signup;
