import { useForm } from "react-hook-form";
import { resetPassword } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from './useAuth';
import type { ResetPasswordFormData } from "../types/auth";


export const useResetPassword = () => {

    useAuth<ResetPasswordFormData>({
        apiFn: resetPassword,
        redirectTo: "/login",
        onSuccess: (data) => {
          console.log("Password reset successful for email:", data.email);
        },
    })
//   const methods = useForm<ResetPasswordFormData>();
//   const navigate = useNavigate();

//   const onSubmit = async (data: ResetPasswordFormData) => {
//     try {
//       const response = await resetPassword(data);

//       console.log(response.data);
//         navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     methods,
//     onSubmit,
//   };
};