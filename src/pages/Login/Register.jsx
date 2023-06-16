import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const Register = () => {
      const [error, setError] = useState('')
      const { createUser, setProfile,logOut } = useAuth();
      const { register, handleSubmit, formState: { errors} ,reset} = useForm();

      const onSubmit = data => {
            setError('')

            createUser(data.email, data.password)
                  .then(result => {
                        setProfile(data.name, data.photoUrl)
                              .then(() => {
                                  reset()
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'Your work has been saved',
                                          showConfirmButton: false,
                                          timer: 1500
                                    })
                                    logOut()
                              }).catch(error => setError(error.message))
                  })
                  .catch(error => {
                        setError(error.message)

                  })
      };

      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input
                                                {...register("name", { required: true })}
                                                type="text"
                                                placeholder="Your Name"
                                                className="input input-bordered"
                                          />
                                          {errors.name && <span className="text-xs text-red-500">Name is required</span>}
                                    </div>
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
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">PhotoUrl</span>
                                          </label>
                                          <input
                                                {...register("photoUrl", { required: true })}
                                                type="text"
                                                placeholder="PhotoUrl"
                                                className="input input-bordered"
                                          />
                                          {errors.photoUrl && (
                                                <span className="text-xs text-red-500">
                                                      Photo url is required
                                                </span>
                                          )}
                                    </div>
                                    {error && <p className=' text-red-500'>{error}</p>}
                                    <div className="form-control mt-6">
                                          <button type="submit" className="btn btn-primary">
                                                Register
                                          </button>
                                    </div>
                              </form>
                              <Link to="/login" className="text-center hover:text-green-600">
                                    Already have an Account? Sign In
                              </Link>
                              <div className="w-1/2 mx-auto flex flex-col mb-10 gap-4">
                                    {/* <button className="btn btn-transparent hover:border border-0">
                                          <FcGoogle /> Sign In with Google
                                    </button>
                                    <button className="btn btn-secondary">Sign In with Github</button> */}
                                    <SocialLogin></SocialLogin>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Register
