import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })

        updateUser(name, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })

        form.reset()
    }
    return (
        <div className='bg-light d-flex justify-content-center align-items-center'>
            <Container className='my-5'>
                <Navigation />
                <Form onSubmit={handleRegister} className='p-5 mt-5 bg-white'>
                    <h3 className='mb-5 text-center'>Register your account</h3>
                    {/* <hr className='bg-light mb-4'/> */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
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