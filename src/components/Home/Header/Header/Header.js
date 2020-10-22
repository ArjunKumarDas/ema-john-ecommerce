import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../images/logo.png';
import { Col, Container, Form, FormControl, Navbar, Row } from 'react-bootstrap';
import Manubar from '../Manubar/Manubar';

const Header = () => {
    return (
        <>
            <Row ><Col className="text-center mt-3"><img className="logo" src={logo} alt=""/></Col></Row>
            <div className="bg-dark">
            <Row className="mt-3 ml-5"><Manubar></Manubar></Row>
            <Container>
                <Row className="mt-3 pb-4">
                <Col md={10}>
                <Form>
                   <FormControl type="text" placeholder="Search" className="" />
                </Form>
                </Col>
                <Col md={2}><FontAwesomeIcon className="text-light" icon={faShoppingCart} /></Col>
           </Row>
            </Container>
            </div>
        </>
    );
};

export default Header;