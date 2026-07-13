import { useForm } from "react-hook-form";
import type { VerifyResetCodeFormData } from "../types/auth";
import { verifyResetCode } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";



export const useVerifyResetPassword = () => {
  useAuth<VerifyResetCodeFormData>({
    apiFn:verifyResetCode,
    redirectTo: "/reset-password",
    onSuccess: (data) => {
      console.log("Reset code verified successfully for email:", data.resetCode);
    },
  })
  // const methods = useForm<VerifyResetCodeFormData>();
  // const navigate = useNavigate();

  // const onSubmit = async (data: VerifyResetCodeFormData) => {
  //   try {
  //     const response = await verifyResetCode(data);

  //     console.log(response.data);
  //     navigate("/reset-password")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return {
  //   methods,
  //   onSubmit,
  // };
};