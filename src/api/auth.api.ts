import type { ForgetPaasswordFormData, ResetPasswordFormData, VerifyResetCodeFormData } from "../types/auth";
import { api } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const forgotPassword = (data:ForgetPaasswordFormData) => {
  return api.post(ENDPOINTS.FORGOT_PASSWORD, {
    email: data.email,
  });
};


export const resetPassword = (data:ResetPasswordFormData) => {
  return api.post(ENDPOINTS.RESET_PASSWORD, {
    email: data.email,
    newPassword:data.newPassword
  });
};



export const verifyResetCode = (data:VerifyResetCodeFormData) => {
  return api.post(ENDPOINTS.VERIFY_RESET_CODE, {
   resetCode:data.resetCode
  });
};