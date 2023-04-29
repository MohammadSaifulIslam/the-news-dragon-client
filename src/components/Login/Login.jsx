import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    console.log(location)


    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            navigate(from)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='bg-light d-flex justify-content-center align-items-center'>
            <Container className='my-5'>
                 <Navigation />
                <Form onSubmit={handleSignin} className='p-5 mt-5 bg-white'>
                    <h3 className='mb-5 text-center'>Login your account</h3>
                    {/* <hr className='bg-light mb-4'/> */}
                  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check  type="checkbox" label="Check me out" required />
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