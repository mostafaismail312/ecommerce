import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faArrowRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { FormProvider, useForm } from 'react-hook-form';
import AuthShell from '../../../components/Auth/AuthShell';
import AuthInput from '../../../components/Auth/AuthInput';
import type { RegisterFormData } from '../../../types/auth';

export default function SignUp() {
  const methods = useForm<RegisterFormData>()


  const onSubmit = (data:RegisterFormData
  ) => {
    console.log(data);

  }

  return (
    <AuthShell
      title="Create account"
      subtitle="Join thousands of shoppers enjoying fast checkout and personalized deals."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerHref="/login"
        illustrationImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80"
  illustrationCaption="Track your orders live, from dispatch to your doorstep."
    >
      <FormProvider {...methods}>
        <form className="space-y-5" onSubmit={methods.handleSubmit(onSubmit)}>
          <AuthInput
            name='name'
            label="Full name"
            placeholder="Alex Johnson"
            icon={<FontAwesomeIcon icon={faUser} />}
            rules={{
              required: "name is required",
            }}
          />
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
            name='phone'
            label="Phone number"
            type="tel"
            placeholder="(555) 123-4567"
            icon={<FontAwesomeIcon icon={faPhoneAlt} />}
            rules={{
              required: "Phone number is required",
              minLength: {
                value: 8,
                message: "Phone number must be at least 12 digits",
              },

            }}
          />
          <AuthInput
            name='Password'
            label="Password"
            type="password"
            placeholder="Create a strong password"
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
          <AuthInput
            name='rePassword'
            label="confraim Password"
            type="password"
            placeholder="Create a strong password"
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

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
            Create account
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </FormProvider>
    </AuthShell>
  );
}
