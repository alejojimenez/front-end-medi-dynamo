import React from "react";
import { Container } from "react-bootstrap";
import '../style/App.css';

function Footer() {
    return (
        <>
            <footer className="py-1" bg="light">
                <Container className="text-center color-text-general">
                    <small><strong>Copyright &copy; Built by Alejojimenez 2020</strong></small>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
