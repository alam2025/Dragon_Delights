import React from 'react';
import { BiCake, BiTime } from "react-icons/bi";
import { FaParking, FaUserFriends } from "react-icons/fa";
const Services = () => {
      return (
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-200 py-16 px-4 rounded-lg'>
                  <div className=' flex gap-4  items-center'>
                        <BiCake size={35}></BiCake>
                        <div>
                              <h1 className=' text-2xl font-semibold'>Premium Material</h1>
                              <p>Made from premium materials</p>
                        </div>
                  </div>
                  <div className=' flex gap-4  items-center'>
                  <BiTime size={35}></BiTime>
                        <div>
                              <h1 className=' text-2xl font-semibold'>Fast Delivery</h1>
                              <p>Receive goods in 45 minutes</p>
                        </div>
                  </div>
                  <div className=' flex gap-4  items-center'>
                        <FaUserFriends size={35}></FaUserFriends>
                        <div>
                              <h1 className=' text-2xl font-semibold'>Friendly Service</h1>
                              <p>Professional & Friendly service</p>
                        </div>
                  </div>
                  <div className=' flex gap-4  items-center'>
                        <FaParking size={35}></FaParking>
                        <div>
                              <h1 className=' text-2xl font-semibold'>Car Parking</h1>
                              <p>Can be parking at restaurant</p>
                        </div>
                  </div>
            </div>
      );
};

export default Services;