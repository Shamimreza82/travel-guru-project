import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import bg from '../assets/icons/Rectangle.png'


const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;