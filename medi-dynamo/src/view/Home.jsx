import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/Home.css";

const Home = () => {

    return (
        <>
            <Container className="style-container-home" fluid>
                <Row>
                    <Col>
                        <div className="style-img-home">
                            <span className="text-home-image" >SISTEMA DE GESTION DE CLINICAS</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;