import { FormProvider, useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faArrowRight } from '@fortawesome/free-solid-svg-icons';

import AuthShell from "../../../components/Auth/AuthShell";
import AuthInput from "../../../components/Auth/AuthInput";
import { useForgotPassword } from "../../../hooks/useForgotPassword";


export default function ForgotPassword() {
  const { methods, onSubmit , isLoading, error } = useForgotPassword();
 
  return (
   <>
      <AuthShell
         title="Forgot Password"
         subtitle="Enter your email address to reset your password."
         footerText=""
         footerLinkText=""
         footerHref=""
       >
 <FormProvider {...methods} >
<form onSubmit={methods.handleSubmit(onSubmit)}>
        <AuthInput
   name="email"
   label="Email address"
    type="email"
    placeholder="mail@examp.com"
   rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email"
              }
            }}
  icon={<FontAwesomeIcon icon={faEnvelope} />}
   />
        <button  disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-4 py-3.5 my-5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
                {isLoading ? "Sending..." : "Send"}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
  </form>
 </FormProvider>
 </AuthShell>
 </>
  )
}
