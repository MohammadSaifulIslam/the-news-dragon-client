import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar>
                <Nav className="ms-auto align-items-center">
                    <Link className='mb-0 ' to='/'>Home</Link>
                    <Nav.Link >About</Nav.Link>
                    <Nav.Link >Career</Nav.Link>
                </Nav>
                <Nav className="ms-auto align-items-center">
                    {user && <FaUserCircle className='fs-3 me-2 ' />}
                    {user
                        ? <Button variant="dark">Logout</Button>
                        : <Link to='/login'><Button variant="dark">Login</Button></Link>
                    }
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Navigation;