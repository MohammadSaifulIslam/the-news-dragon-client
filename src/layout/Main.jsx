import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Headeer from '../components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Headeer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;