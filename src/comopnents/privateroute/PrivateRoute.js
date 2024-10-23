import React from "react";
import {Outlet,Navigate} from 'react-router-dom';

function PrivateRoute(){
    let auth=localStorage.getItem('user');
    return auth?<Outlet /> : <Outlet />;
}
export default PrivateRoute;