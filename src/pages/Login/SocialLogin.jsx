import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
      const navigate = useNavigate()
      const { googleSignIn ,gitHubSignIn} = useAuth()
      const handleGoogleLogin = () => {
            googleSignIn()
                  .then(() => {
                        Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work has been saved',
                              showConfirmButton: false,
                              timer: 1500
                        })
                        navigate('/')})
      }
      return (
            <>
                  <button onClick={handleGoogleLogin} className="btn btn-transparent hover:border border-0">
                        <FcGoogle /> Sign In with Google
                  </button>
                  <button onClick={()=>gitHubSignIn().then(navigate('/'))} className="btn btn-secondary">Sign In with Github</button>
            </>
      );
};

export default SocialLogin;