import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadSpinner from '../pages/Shared/LoadSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      const {user,loading}=useAuth();
      const location = useLocation()
      if(loading){
            return <LoadSpinner></LoadSpinner>
      }
      if(user){
            return children
      }
      return <Navigate to='/login' state={{from : location}} replace ></Navigate>
};

export default PrivateRoute;