import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return  children
    }
    return <Navigate state={{from : location}} to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;