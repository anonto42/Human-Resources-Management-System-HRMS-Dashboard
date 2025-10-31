import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type {RootState} from "../redux/stores/store.ts";

export default function ProtectedRoute() {
    const { token } = useSelector((state: RootState) => state.auth);

    // If no token, redirect to sign-in page
    if (!token) {
        return <Navigate to="/sign-in" replace />;
    }

    // If logged in, render child routes
    return <Outlet />;
}
