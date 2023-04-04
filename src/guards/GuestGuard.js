import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const GuestGuard = () => {
    const { user } = useContext(AuthContext);
    if (!user?._id) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}