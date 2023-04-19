import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <Container className='mt-5'>
        <Row>
          <Col sm={3}>
            <LeftNav/>
          </Col>
          <Col sm={6}>
            <p>main component cooming soon</p>
          </Col>
          <Col sm={3}>
            <RightNav/>
          </Col>
        </Row>
      </Container>
    );
};

export default Home;