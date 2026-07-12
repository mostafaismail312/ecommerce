import { useForm } from "react-hook-form";
import { forgotPassword } from "../api/auth.api";
import type { ForgetPaasswordFormData } from "../types/auth";


export const useForgotPassword = () => {
  const methods = useForm<ForgetPaasswordFormData>();

  const onSubmit = async (data: ForgetPaasswordFormData) => {
    try {
      const response = await forgotPassword(data);

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