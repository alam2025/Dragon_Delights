import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Login = () => {
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="text" placeholder="email" className="input input-bordered" />
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
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary">Login</button>
                                    </div>

                                    <Link to='/register' className=' text-center hover:text-green-600'>Don't have an Account ? Sign Up</Link>

                              </div>
                              <div className=' w-1/2 mx-auto flex flex-col mb-10 gap-4'>
                                    <button className=' btn btn-transparent hover:border border-0'><FcGoogle></FcGoogle> Sign In with Google</button>
                                    <button className='btn btn-secondary'>Sign In with Github</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;