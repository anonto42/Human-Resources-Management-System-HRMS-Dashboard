import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/dashboard/Home.tsx";
import SignIn from "../pages/auth/SignIn.tsx";
import NotFoundPage from "../pages/not-found/NotFoundPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

export default function RouterElement () {

    return (
        <Router>
            <Routes>
0
                {/* Auth Routes */}
                <Route path="/sign-in" element={<SignIn />} />

                {/* Dashboard Routes */}
                <Route element={<ProtectedRoute />} >
                    <Route  path="/"  element={<HomePage />} />
                </Route>

                {/* Not Found */}
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    )
}
