import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react";
import Loader from "../components/Loader.tsx";

// Lazy Imports
const HomePage = lazy(()=> import( "../pages/dashboard/Home.tsx"));
const SignIn = lazy( () => import("../pages/auth/SignIn.tsx"));
const NotFoundPage = lazy( () => import("../pages/not-found/NotFoundPage.tsx"));
const ProtectedRoute = lazy( () => import("./ProtectedRoute.tsx"));
const SignUpPage = lazy( () => import("../pages/auth/SignUp.tsx"));
const ForgotPasswordPage = lazy( () => import("../pages/auth/ForgotPassword.tsx"));
const VerifyEmailPage = lazy( () => import("../pages/auth/VerifyEmail.tsx"));
const CreateNewPasswordPage = lazy( () => import("../pages/auth/CreateNewPassword.tsx"));
const ResetPasswordPage = lazy( () => import("../pages/auth/ResetPasswordPage.tsx"));

export default function RouterElement () {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>

                    {/* Auth Routes */}
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/verify-email" element={<VerifyEmailPage />} />
                    <Route path="/create-new-password" element={<CreateNewPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />

                    {/* Dashboard Routes */}
                    <Route element={<ProtectedRoute />} >
                        <Route  path="/"  element={<HomePage />} />
                    </Route>

                    {/* Not Found */}
                    <Route path="*" element={<NotFoundPage />} />

                </Routes>
            </Suspense>
        </Router>
    )
}
