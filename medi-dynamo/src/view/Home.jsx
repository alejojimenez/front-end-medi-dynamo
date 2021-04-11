import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../component/NavBar';
import "../style/Home.css";

const Home = () => {

	const { store, actions } = useContext(Context);
    console.log("Home Token 1", store.user_data.token)
	useEffect(() => {
		actions.getToken();
	}, []);

    console.log("Home Token 2", store.user_data.token)
    return (
        <>
			{store.user_data.token !== null ? (       
                <>
                    <NavBar />
                    <Container fluid>
                        <Row>
                            <Col className="col-home">
                                <div className="style-img-home">
                                    <span className="text-home-image">SISTEMA DE GESTION DE CLINICAS</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>
                ) : (
                    null
                )
            }
        </>
    )
}

export default Home;