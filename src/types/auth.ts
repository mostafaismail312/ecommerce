import type { FieldValues } from "react-hook-form";

export type UseAuthProps<T extends FieldValues>={
 apiFn: (data: T) => Promise<any>;
 redirectTo?: string;
 onSuccess: (data: T, response: any) => void;
}


export type ForgetPaasswordFormData = {
    email: string;
  };

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};


export type ResetPasswordFormData = {
  email: string;
  newPassword: string;
};


export type VerifyResetCodeFormData={
  resetCode: string
}