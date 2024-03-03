import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "./store/users";
export const ProtectedRoute = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (!isLoggedIn) {
        return (
            <Navigate
                to={{
                    pathname: "/login",
                }}
            />
        );
    }
    return <Outlet />;
};
