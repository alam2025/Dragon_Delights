import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
      const [isHovering,setIsHovering] =useState(false)
      const { user, logOut } = useAuth()
      const navigate = useNavigate()
      console.log(user);



      const navList = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/favourite'>Favourite</NavLink></li>
      </>
      return (
            <div className="navbar bg-base-100 md:px-[10%]">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {navList}
                              </ul>
                        </div>
                        <Link to='/'><img className='h-[70px] lg:h-[100px]' src={logo} alt="Dragon Delights" /></Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navList}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1 flex items-center">
                              {
                                    user ? <>

                                          <div className=" relative">
                                                {/* <img className=" rounded-full w-[70px]" src={user.photoURL} alt="" /> */}
                                                
                                                      <img
                                                            style={{ width: '60px', height: '60px' }}
                                                            className=' bg-slate-600 mr-5 rounded-full'
                                                            src={user?.photoURL}
                                                            alt='profile'
                                                            onMouseEnter={() => setIsHovering(true)}
                                                            onMouseLeave={() => setIsHovering(false)}
                                                      />
                                             
                                                <h6 style={{ width: '120px', marginLeft: '-30px', top: '30px', fontWeight: '700' }} className={`hover-display-name py-2 rounded  absolute text-white pl-2 text-sm bg-black ${isHovering ? ' block' : ' hidden'}`}>
                                                      {user.displayName}
                                                </h6>
                                          </div>

                                          <li><button onClick={() => logOut().then(() => navigate('/'))} className=' btn btn-outline btn-sm'>Logout</button></li>


                                    </> : <li><NavLink to='/login'>Login</NavLink></li>
                              }


                        </ul>

                  </div>
            </div>
      );
};

export default Navbar;