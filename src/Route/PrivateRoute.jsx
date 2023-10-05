/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, isLoading } = useContext( AuthContext )
    const location = useLocation();


    if ( isLoading ) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    if ( user ) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;