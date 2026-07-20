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
     
        <Login/>
  
    ),
  },
  {
    path: "/signup",
    element: (
   
        <SignUp />
    
    ),
  },
  {
    path: "/forgot-password",
    element: (
      
        <ForgotPassword />
  
    ),
  },
  {
    path: "/verify-reset",
    element: (
     
        <VerifyResetPassword />
    
    ),
  },
  {
    path: "/reset-password",
    element: (
     
        <ResetPassword />
     
    ),
  },
];