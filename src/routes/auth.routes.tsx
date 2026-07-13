import PublicRoute from "../guards/PublicRoute";
import ForgotPassword from "../pages/Authentication/ForgotPassword/ForgotPassword";
import Login from "../pages/Authentication/Login/Login";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import VerifyResetPassword from "../pages/Authentication/VerifyResetPassword/VerifyResetPassword";


export const authRoutes = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login/>
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/verify-reset",
    element: (
      <PublicRoute>
        <VerifyResetPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },
];