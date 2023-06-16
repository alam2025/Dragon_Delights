import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
const Login = () => {
      const navigate = useNavigate()

      const [error, setError] = useState('');
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const { user, logIn } = useAuth();


      const onSubmit = data => {
            setError('')
            logIn(data.email, data.password)
                  .then(() => {
                        navigate('/')
                  })
                  .catch(error => setError(error.message))


      };
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input
                                                {...register("email", { required: true })}
                                                type="email"
                                                placeholder="Email"
                                                className="input input-bordered"
                                          />
                                          {errors.email && <span className="text-xs text-red-500">Invalid email address</span>}
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input
                                                {...register("password", { required: true, minLength: 6 })}
                                                type="password"
                                                placeholder="Password"
                                                className="input input-bordered"
                                          />
                                          {errors.password && (
                                                <span className="text-xs text-red-500">
                                                      Password must be at least 6 characters long
                                                </span>
                                          )}
                                    </div>

                                    <div className="form-control mt-6">
                                          <button type="submit" className="btn btn-primary">
                                                Login
                                          </button>
                                    </div>
                              </form>
                              <Link to='/register' className=' text-center hover:text-green-600'>Don't have an Account ? Sign Up</Link>
                              <div className=' w-1/2 mx-auto flex flex-col mb-10 gap-4'>
                                    {/* <button className=' btn btn-transparent hover:border border-0'><FcGoogle></FcGoogle> Sign In with Google</button>
                                    <button className='btn btn-secondary'>Sign In with Github</button> */}
                                    <SocialLogin></SocialLogin>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;