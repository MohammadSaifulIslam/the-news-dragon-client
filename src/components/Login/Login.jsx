import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-light d-flex justify-content-center align-items-center'>
            <Container className='my-5'>
                 <Navigation />
                <Form className='p-5 mt-5 bg-white'>
                    <h3 className='mb-5 text-center'>Login your account</h3>
                    {/* <hr className='bg-light mb-4'/> */}
                  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" required />
                    </Form.Group>
                    <Button className='w-100 py-2 ' variant="dark" type="submit">
                        Login
                    </Button>
                    <p className="text-muted text-center mt-3">
                    Dont’t Have An Account ? <Link to='/register' className='text-danger'>Register</Link>
                    </p>
                </Form>
            </Container>
        </div>
    );
};

export default Login;