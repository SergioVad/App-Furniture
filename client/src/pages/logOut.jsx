import { logOut } from "@/app/store/users";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
        <Navigate to="/" replace />;
    }, []);
    return <h1>Loading</h1>;
};

export default LogOut;
