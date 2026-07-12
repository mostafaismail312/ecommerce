import { useForm } from "react-hook-form";
import type { VerifyResetCodeFormData } from "../types/auth";
import { verifyResetCode } from "../api/auth.api";



export const useVerifyResetPassword = () => {
  const methods = useForm<VerifyResetCodeFormData>();

  const onSubmit = async (data: VerifyResetCodeFormData) => {
    try {
      const response = await verifyResetCode(data);

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