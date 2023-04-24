import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Headeer = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p><small className='text-secondary mt-2'>Journalism Without Fear or Favour</small></p>
                <p className='mt-0'>{moment().format("dddd, MMMM D, YYYY")}</p>
                <div className='d-flex bg-light mb-4 p-2'>
                    <Button variant="danger">Latest</Button>
                    <Marquee>
                        Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain — as it happened   !
                    </Marquee>
                </div>
            </div>

            {/* navber start */}
            <Navbar>
                <Nav className="ms-auto">
                    <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link >About</Nav.Link>
                    <Nav.Link >Career</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link >Profile</Nav.Link>
                    <Button variant="dark">Login</Button>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Headeer;