import { useForm } from "react-hook-form";
import type { ResetPasswordFormData } from "../types/auth";
import { resetPassword } from "../api/auth.api";


export const useResetPassword = () => {
  const methods = useForm<ResetPasswordFormData>();

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const response = await resetPassword(data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    onSubmit,
  };
};