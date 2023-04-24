import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Headeer from '../components/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/Shared/LeftNav/LeftNav';
import RightNav from '../components/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Headeer />
            <Container className='mt-5'>
                <Row>
                    <Col sm={3}>
                        <LeftNav />
                    </Col>
                    <Col sm={6}>
                        <h3 className='mb-3'>Dragon News Home</h3>
                        <Outlet />
                    </Col>
                    <Col sm={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;