import { useForm } from "react-hook-form";
import type { ResetPasswordFormData } from "../types/auth";
import { resetPassword } from "../api/auth.api";
import { useNavigate } from "react-router-dom";


export const useResetPassword = () => {
  const methods = useForm<ResetPasswordFormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const response = await resetPassword(data);

      console.log(response.data);
        navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    onSubmit,
  };
};