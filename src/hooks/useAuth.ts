import { useForm, type FieldValues } from "react-hook-form";
import type { UseAuthProps } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import axios from "axios";

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

      console.log(response.data);

      onSuccess?.(data, response);
if (redirectTo) {
    navigate(redirectTo);
}
   return response;
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    setError(
      error.response?.data?.message ??
      error.message
    );
  } else {
    setError("Something went wrong");
  }
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
