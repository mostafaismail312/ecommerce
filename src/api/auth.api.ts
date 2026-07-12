import type { ForgetPaasswordFormData } from "../types/auth";
import { api } from "./axios";
import { ENDPOINTS } from "./endpoints";

export const forgotPassword = (data:ForgetPaasswordFormData) => {
  return api.post(ENDPOINTS.FORGOT_PASSWORD, {
    email: data.email,
  });
};