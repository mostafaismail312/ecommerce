import { forgotPassword } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";
import type { ForgetPaasswordFormData } from "../types/auth";
import { toast } from "react-toastify";

                                                

export const useForgotPassword = () =>
  useAuth<ForgetPaasswordFormData>({
    apiFn: forgotPassword,
    redirectTo: "/verify-reset",
    onSuccess: (data) => {
      localStorage.setItem("resetEmail", data.email);
    },
  }
);
//   const methods = useForm<ForgetPaasswordFormData>();
//  const navigate = useNavigate();
//   const onSubmit = async (data: ForgetPaasswordFormData) => {
//     try {
//       const response = await forgotPassword(data);

//       console.log(response.data);
//        localStorage.setItem("resetEmail", data.email);

//       navigate("/verify-code");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     methods,
//     onSubmit,
//   };
