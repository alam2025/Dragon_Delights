import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Main = () => {
      return (
            <div className=' flex flex-col min-h-screen'>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;