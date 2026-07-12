import { useForm } from "react-hook-form";
import { forgotPassword } from "../api/auth.api";
import type { ForgetPaasswordFormData } from "../types/auth";
import { useNavigate } from "react-router-dom";


export const useForgotPassword = () => {
  const methods = useForm<ForgetPaasswordFormData>();
 const navigate = useNavigate();
  const onSubmit = async (data: ForgetPaasswordFormData) => {
    try {
      const response = await forgotPassword(data);

      console.log(response.data);
       localStorage.setItem("resetEmail", data.email);

      navigate("/verify-code");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    onSubmit,
  };
};