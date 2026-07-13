import { useForm, type FieldValues } from "react-hook-form";
import type { UseAuthProps } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useAuth = <T extends FieldValues>({
  apiFn,
  redirectTo,
  onSuccess,
}: UseAuthProps<T>) => {
  const methods = useForm<T>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onSubmit =useCallback( async (data: T) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiFn(data);
        toast.success(response.data?.message || "Success");


      console.log(response.data);

      onSuccess?.(data, response);
if (redirectTo) {
    navigate(redirectTo);
}
   return response;
    } catch (error: unknown) {
  let message = "Something went wrong";

  if (axios.isAxiosError(error)) {
    message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong";
  }

  setError(message);
  toast.error(message);
 } finally {
      setIsLoading(false);
    }
  },[apiFn, navigate, redirectTo, onSuccess]);

  return {
    methods,
    onSubmit,
    isLoading,
    error,
  };
};
