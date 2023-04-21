import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Headeer from '../components/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../components/Shared/RightNav/RightNav';
const NewsLayout = () => {
    return (
        <div>
           <Headeer />
            <Container className='mt-5'>
                <Row>
                    <Col sm={9}>
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

export default NewsLayout;