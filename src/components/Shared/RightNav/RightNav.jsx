import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div className='w-full'>
            <div className="login-with">
                <h4>Login With</h4>
                <Button variant="outline-primary w-100 my-2"><FaGoogle/> Login with Google</Button>
                <Button variant="outline-secondary w-100"><FaGithub/> Login with Github</Button>
            </div>
            <div className="find-us-on mt-4">
                <h3>Find On Us</h3>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='pointer'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='pointer'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='pointer'><FaInstagram/> Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="q-zone bg-light mt-3 p-2">
                <h4>Q-Zone</h4>
                <QZone/>
            </div>
            <div className='mt-4 position-relative'>
                <img src={bg} alt="" className=' '/>
                <div className='position-absolute top-50 start-50 translate-middle text-white text-center'>
                <h2>Create an Amazing Newspaper</h2>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;