import { useForm } from "react-hook-form";
import type { VerifyResetCodeFormData } from "../types/auth";
import { verifyResetCode } from "../api/auth.api";
import { useNavigate } from "react-router-dom";



export const useVerifyResetPassword = () => {
  const methods = useForm<VerifyResetCodeFormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: VerifyResetCodeFormData) => {
    try {
      const response = await verifyResetCode(data);

      console.log(response.data);
      navigate("/reset-password")
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    onSubmit,
  };
};