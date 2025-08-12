import React, { useContext } from 'react';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading) {
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state = {location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;