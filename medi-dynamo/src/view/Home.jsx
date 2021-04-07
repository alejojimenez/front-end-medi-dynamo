import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/Home.css";
//import NavBar from '../component/NavBar';
// import Footer from '../component/Footer';


const Home = () => {

    return (
        <>
            {/* <NavBar /> */}
            <Container fluid>
                <Row>
                    <Col className="col-home">
                        <div className="style-img-home">
                            <span className="text-home-image" >SISTEMA DE GESTION DE CLINICAS</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </>
    )
}

export default Home;