import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
const Register = () => {
      
      const {createUser}=useAuth()
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Sign Up Now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="text" placeholder="password" className="input input-bordered" />
                                          <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">PhotoUrl</span>
                                          </label>
                                          <input type="text" placeholder="PhotoUrl" className="input input-bordered" />
                                        
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary">Register</button>
                                    </div>

                                    <Link to='/login' className=' text-center hover:text-green-600'>Already have an Account ? Sign In</Link>

                              </div>
                              <div className=' w-1/2 mx-auto flex flex-col mb-10 gap-4'>
                                    <button onClick={handleGoogleSignIN} className=' btn btn-transparent hover:border border-0'><FcGoogle></FcGoogle> Sign In with Google</button>
                                    <button className='btn btn-secondary'>Sign In with Github</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;