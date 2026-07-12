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