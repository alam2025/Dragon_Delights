import React from 'react';
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
      const handleGoogleLogin=()=>{
            console.log('here');
      }
      return (
            <>
                  <button onClick={handleGoogleLogin} className="btn btn-transparent hover:border border-0">
                        <FcGoogle /> Sign In with Google
                  </button>
                  <button className="btn btn-secondary">Sign In with Github</button>
            </>
      );
};

export default SocialLogin;