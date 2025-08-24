import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
        <div className='w-full lg:w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;