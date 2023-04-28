import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthProvider from '../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const {user, createUser} = useContext(AuthProvider);

  
    return (
        <div className='bg-light d-flex justify-content-center align-items-center'>
        <Container className='my-5'>
             <Navigation />
            <Form className='p-5 mt-5 bg-white'>
                <h3 className='mb-5 text-center'>Register your account</h3>
                {/* <hr className='bg-light mb-4'/> */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Term & Conditions" required />
                </Form.Group>
                <Button className='w-100 py-2 ' variant="dark" type="submit">
                        Register
                    </Button>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>
        </Container>
    </div>
    );
};

export default Register;