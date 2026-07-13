import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FormProvider, useForm } from 'react-hook-form'
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import AuthShell from '../../../components/Auth/AuthShell';
import AuthInput from '../../../components/Auth/AuthInput';
import type { LoginFormData } from '../../../types/auth';

export default function Login() {
  const methods = useForm<LoginFormData>()
  const navigate = useNavigate()

  const onSubmit = async (values: LoginFormData) => {
    console.log(values);
    try {
      const options = {
        method: "POST",
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data.message);


      if (data.message === "success") {
        toast("Login successful!");
        localStorage.setItem("token", data.token);
        navigate('/')

      } else {
        toast("Failed to login. Please try again.");
      }
    }
    catch (error) {
      console.error("Error logging in:", error);
      toast("Failed to login. Please try again.");
    }


  };
  return (
    <>
      <AuthShell
        title="Welcome back"
        subtitle="Sign in to continue your seamless shopping experience."
        footerText="New here?"
        footerLinkText="Create an account"
        footerHref="/signup"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            <AuthInput
              name='email'
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email"
                }
              }}
            />

            <AuthInput
              name='password'
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<FontAwesomeIcon icon={faLock} />}

              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number, and special character",
                },
              }}
            />
            {/* {methods.formState.errors.email && <p>{errors.email.message}</p>} */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                Remember me
              </label>
              <Link to="/forgot-password" className="font-medium text-primary-600 transition hover:text-primary-700">
                Forgot password?
              </Link>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
              Sign in
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </FormProvider>
      </AuthShell>

    </>
  );
}